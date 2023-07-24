"use client";

import { Session } from "next-auth";
import { usePathname, useRouter } from "next/navigation";
import { FC } from "react";
import UserAvatar from "./UserAvatar";
import { Input } from "./ui/Input";
import { Button } from "./ui/Button";
import { ImageIcon, Link2 } from "lucide-react";

interface CreatePostProps {
  session: Session | null;
}

const CreatePost: FC<CreatePostProps> = ({ session }) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <li className="overflow-hidden rounded-md bg-white shadow list-none">
      <div className="h-full px-6 py-4 flex flex-col md:flex-row justify-between gap-6">
        <div className="relative w-fit h-fit">
          <UserAvatar
            user={{
              name: session?.user.name || null,
              image: session?.user.image || null,
            }}
          />
          <span className="absolute bottom-0 right-0 rounded-full w-3 h-3 bg-green-500 outline outline-2 outline-white" />
        </div>
        <Input
          readOnly
          onClick={() => router.push(pathname + "/submit")}
          placeholder="Create Post"
        />
        <div className="flex">
          <Button
            variant="ghost"
            onClick={() => router.push(pathname + "/submit")}
          >
            <ImageIcon className="text-zinc-600" />
          </Button>
          <Button
            variant="ghost"
            onClick={() => router.push(pathname + "/submit")}
          >
            <Link2 className="text-zinc-600" />
          </Button>
        </div>
      </div>
    </li>
  );
};

export default CreatePost;
