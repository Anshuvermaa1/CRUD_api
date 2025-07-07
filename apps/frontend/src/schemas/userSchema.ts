import { z } from 'zod';

export const userSchema = z.object({
  username: z.string().min(3),
  email: z.string().email(),
});

export type UserInput = z.infer<typeof userSchema>;