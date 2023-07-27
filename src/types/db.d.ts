import { Comment, Post, Subreddit, User, Vote } from "@prisma/client";

export type ExtendedPost = Post & {
  subreddit: Subreddit;
  author: User;
  comments: Comment[];
  votes: Vote[];
};
