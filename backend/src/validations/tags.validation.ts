import { z } from "zod";

export const tagSchema = z.object({
  name: z.array(z.string()),
});

export type tagInput = z.infer<typeof tagSchema>;
