import { z } from "zod";

const objectId = z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid ObjectId");

export const contentSchema = z.object({
  title: z.string(),
  type: z.string(),
  link: z.url(),
  tags: z.array(objectId),
});
export const inputSchema = contentSchema.extend({
  userId: objectId,
});

export type inputContent = z.infer<typeof contentSchema>;
export type FullContentInput = z.infer<typeof inputSchema>;
