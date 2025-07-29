import { z } from 'zod';

export const userProfileSchema = z.object({
  name: z.string().min(1, { message: 'Username is required' }),
  bandaiTCG: z
    .string()
    .min(2)
    .refine((val) => /\d/.test(val), {
      message: 'BandaiTCG is required and must include a number',
    }),
  discordName: z.string().min(1, { message: 'Discord Name is required' }),
  leader: z.string().optional(),
  cardsDeck: z.string().optional(),
  city: z.string().optional(),
});
