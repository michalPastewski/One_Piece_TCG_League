'use server';

import { onboardingSchema } from '@/lib/validationSchema';
import { auth, clerkClient } from '@clerk/nextjs/server';
import { z } from 'zod';
import { dbUserSynchronization } from './clerk';

export const completeOnboarding = async (
  formData: z.infer<typeof onboardingSchema>
) => {
  const { userId } = await auth();

  if (!userId) {
    return { message: 'No Logged In User' };
  }

  const client = await clerkClient();

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

    dbUserSynchronization();

    return { message: res.publicMetadata };
  } catch (error) {
    return { Error: 'There was an error updating the user metadata.', error };
  }
};
