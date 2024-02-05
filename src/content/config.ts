import { z, defineCollection } from "astro:content";

const postCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date(),
    draft: z.boolean(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { posts: postCollection };
