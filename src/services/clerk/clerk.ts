import { currentUser } from '@clerk/nextjs/server';
import { insertUser } from '../db/users/user';

export async function dbUserSynchronization() {
  const user = await currentUser();
  if (!user) {
    throw new Error('User not found');
  }

  if (!user.primaryEmailAddress?.emailAddress) {
    throw new Error('User email not found');
  }

  const userData = {
    clerkUserId: user.id,
    email: user.primaryEmailAddress.emailAddress,
    imageUrl: user.imageUrl,
    name: user.publicMetadata.name,
    role: user.publicMetadata.role,
    bandaiTCG: user.publicMetadata.bandaiTCG,
    discordName: user.publicMetadata.discordName ?? '',
    leader: user.publicMetadata.leader,
    cardsDeck: user.publicMetadata.cardsDeck,
    city: user.publicMetadata.city,
    createdAt: new Date(user.createdAt),
    updatedAt: new Date(user.updatedAt),
  };

  await insertUser(userData);
}
