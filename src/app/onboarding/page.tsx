'use client';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { PageWrapper } from '@/components/ui/pageWrapper';
import { userProfileSchema } from '@/lib/validationSchema';
import { SignOutButton, useUser } from '@clerk/nextjs';
import { zodResolver } from '@hookform/resolvers/zod';
import { Label } from '@radix-ui/react-label';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { completeOnboarding } from '../../services/clerk/_actions';

export default function OnboardingPage() {
  const { user } = useUser();
  const router = useRouter();

  const registrationForm = useForm<z.infer<typeof userProfileSchema>>({
    resolver: zodResolver(userProfileSchema),
    defaultValues: {
      name: '',
      bandaiTCG: '',
      discordName: '',
      leader: '',
      cardsDeck: '',
      city: '',
    },
  });

  const handleSubmit = async (formData: z.infer<typeof userProfileSchema>) => {
    try {
      const res = await completeOnboarding(formData);
      if (res?.message) {
        await user?.reload();
        router.push('/');
      }
      if (res?.error) {
        console.error('Error during onboarding:', res?.error);
      }
    } catch (error) {
      console.error('Error during onboarding:', error);
    }
  };

  return (
    <PageWrapper label="Registration">
      <Form {...registrationForm}>
        <form onSubmit={registrationForm.handleSubmit(handleSubmit)}>
          <FormField
            control={registrationForm.control}
            name="name"
            render={({ field }) => (
              <FormItem className="mt-4">
                <Label htmlFor="username">Username</Label>
                <FormControl>
                  <Input id="username" placeholder="Username" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={registrationForm.control}
            name="bandaiTCG"
            render={({ field }) => (
              <FormItem>
                <Label htmlFor="bandai">BandaiTCG</Label>
                <FormControl>
                  <Input
                    id="bandai"
                    placeholder="BandaiTCG+number"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Remember to include the number at the end of your Bandai.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={registrationForm.control}
            name="discordName"
            render={({ field }) => (
              <FormItem>
                <Label htmlFor="discordName">Discord Name</Label>
                <FormControl>
                  <Input
                    id="discordName"
                    placeholder="Discord Name"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={registrationForm.control}
            name="leader"
            render={({ field }) => (
              <FormItem>
                <Label htmlFor="leader">Leader</Label>
                <FormControl>
                  <Input
                    id="leader"
                    placeholder="Your leader card"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  You can set it later in your profile.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={registrationForm.control}
            name="cardsDeck"
            render={({ field }) => (
              <FormItem>
                <Label htmlFor="deck">Cards Deck</Label>
                <FormControl>
                  <Input id="deck" placeholder="Your deck " {...field} />
                </FormControl>
                <FormDescription>
                  You can set it later in your profile.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={registrationForm.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <Label htmlFor="city">City</Label>
                <FormControl>
                  <Input id="city" placeholder="Your city" {...field} />
                </FormControl>
                <FormDescription>
                  You can set it later in your profile.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-center justify-end gap-4 mt-4">
            <SignOutButton redirectUrl="/">
              <Button className="hover:text-secondary">Cancel</Button>
            </SignOutButton>
            <Button
              className="hover:text-secondary bg-accent-light"
              type="submit">
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </PageWrapper>
  );
}
