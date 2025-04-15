import { auth } from '@clerk/nextjs/server';

export async function getCurrentUser() {
  const { userId, sessionClaims } = await auth();

  if (!userId) {
    console.log('User is undefined');
  }

  return {
    clerkId: userId,
    userData: sessionClaims?.metadata,
  };
}
