import { UserRole } from '@/drizzle/schema';

export {};

declare global {
  interface CustomJwtSessionClaims {
    name: string;
    bandaiTCG: string;
    dbId?: string;
    role?: UserRole;
    city?: string;
    leader?: string;
    cardsDeck?: string;
    discordName?: string;
  }

  interface UserPublicMetadata {
    name: string;
    bandaiTCG: string;
    dbId?: string;
    role?: UserRole;
    city?: string;
    leader?: string;
    cardsDeck?: string;
    discordName?: string;
  }
}


// TODO: I'm not  sure if it is necessary after removing CLerk webhook
