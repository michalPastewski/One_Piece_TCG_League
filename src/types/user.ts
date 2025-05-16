import { UserRole } from '@/services/drizzle/schema/user';

export type User = {
  id: string;
  clerkUserId: string;
  email: string;
  name: string;
  role: UserRole;
  imageUrl: string | null;
  deletedAt: Date | null;
  bandaiTCG: string;
  discordName?: string;
  leader?: string | null;
  cardsDeck?: string | null;
  city?: string | null;
  createdAt: Date;
  updatedAt: Date;
};
