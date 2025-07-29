'use server';

import { userProfileSchema } from '@/lib/validationSchema';
import { auth, clerkClient } from '@clerk/nextjs/server';
import { z } from 'zod';
import { dbAddUserSynchronization, dbUpdateUserSynchronization } from './clerk';

export const completeOnboarding = async (
  formData: z.infer<typeof userProfileSchema>
) => {
  const client = await clerkClient();
  const { userId } = await auth();

  if (!userId) {
    return { message: 'No Logged In User' };
  }

  try {
    const res = await client.users.updateUser(userId, {
      publicMetadata: {
        onboardingComplete: true,
        name: formData.name,
        bandaiTCG: formData.bandaiTCG,
        discordName: formData.discordName,
        leader: formData.leader,
        cardsDeck: formData.cardsDeck,
        city: formData.city,
        role: 'user',
      },
    });

    dbAddUserSynchronization();

    return { message: res.publicMetadata };
  } catch (error) {
    return { Error: 'There was an error updating the user metadata.', error };
  }
};

export const pilotProfileUpdate = async (
  formData: z.infer<typeof userProfileSchema>
) => {
  const client = await clerkClient();
  const { userId } = await auth();
  console.log('PILOT PROFILE UPDATE', formData, userId);

  if (!userId) {
    return { message: 'No Logged In User' };
  }

  try {
    const res = await client.users.updateUser(userId, {
      publicMetadata: {
        onboardingComplete: true,
        name: formData.name,
        bandaiTCG: formData.bandaiTCG,
        discordName: formData.discordName,
        leader: formData.leader,
        cardsDeck: formData.cardsDeck,
        city: formData.city,
        role: 'user',
      },
    });

    await dbUpdateUserSynchronization();

    return { message: res.publicMetadata };
  } catch (error) {
    return { Error: 'There was an error updating the user metadata.', error };
  }
};
