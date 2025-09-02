import { z } from "zod";

export const zodSignupSchema = z.object({
  username: z.string().min(5, "Username must be at least 5 characters long"),
  email: z.string().email(),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});
