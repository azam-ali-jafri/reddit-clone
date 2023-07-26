import { z } from "zod";

export const PostValidator = z.object({
  title: z
    .string()
    .min(3, "Title must be greater than 3 characters")
    .max(128, "Title must be lesser then 128 characters."),
  subredditId: z.string(),
  content: z.any(),
});

export type PostCreationReq = z.infer<typeof PostValidator>;
