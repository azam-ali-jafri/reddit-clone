import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { PostVoteValidator } from "@/lib/validators/vote";
import { CachedPost } from "@/types/redis";

const CACHE_AFTER_UPVOTES = 1;

export async function PATCH(req: Request) {
  try {
    const body = req.json();

    const { postId, voteType } = PostVoteValidator.parse(body);

    const session = await getAuthSession();

    if (!session) return new Response("Unauthorized", { status: 401 });

    const existingVote = await db.vote.findFirst({
      where: {
        userId: session.user.id,
        postId,
      },
    });

    const post = await db.post.findUnique({
      where: {
        id: postId,
      },
      include: {
        author: true,
        votes: true,
      },
    });

    if (!post) {
      return new Response("Post not found", { status: 404 });
    }

    if (existingVote) {
      if (existingVote.type === voteType) {
        await db.vote.delete({
          where: {
            userId_postId: {
              postId,
              userId: session.user.id,
            },
          },
        });

        return new Response("success");
      }
      await db.vote.update({
        where: {
          userId_postId: {
            userId: session.user.id,
            postId,
          },
        },
        data: {
          type: voteType,
        },
      });

      const voteCount = post.votes.reduce((acc, vote) => {
        if (vote.type === "UP") return acc + 1;
        else if (vote.type === "DOWN") return acc - 1;
        return acc;
      }, 0);

      if (voteCount >= CACHE_AFTER_UPVOTES) {
        const cachePayload: CachedPost = {
          authorUsername: post.author.username ?? "",
          content: JSON.stringify(post.content),
          id: post.id,
          title: post.title,
          currentVote: voteType,
          createdAt: post.createdAt,
        };
      }
    }
  } catch (error) {}
}
