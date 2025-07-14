import { z } from "zod";

export const registerSchema = z.object({
  username: z.string().min(3),
  email: z.email(),
  password: z.string().min(5),
});

export const loginSchema = z.object({
  email: z.email(),
  password: z.string().min(5),
});

export type registerInput = z.infer<typeof registerSchema>;
export type loginInput = z.infer<typeof loginSchema>;
