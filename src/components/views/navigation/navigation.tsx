'use client';
import NavLogo from '@/assets/image/nav_logo.png';
import { Button } from '@/components/ui/button';
import { NavigationMenu } from '@/components/views/navigation/navigationMenu';
import { NAV_LINKS_SIGN_IN, NAV_LINKS_SIGN_OUT } from '@/constants/navigation';
import { useIsMobile } from '@/hooks/useMobile';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import { Menu, UserRoundPen } from 'lucide-react';
import Image from 'next/image';
import { Suspense, useState } from 'react';
import { PilotProfile } from '../pilotProfile';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isMobile: boolean = useIsMobile() ?? false;

  return (
    <nav className="fixed flex items-center justify-between w-screen h-[60px] px-2 lg:px-4 z-50 bg-primary">
      {isMobile && <Menu className="w-9 h-8" onClick={() => setIsOpen(true)} />}
      <Image
        src={NavLogo}
        alt="ONE PIECE League image"
        className="w-auto h-14"
      />
      <Suspense>
        <SignedOut>
          <NavigationMenu
            isMobile={isMobile}
            isOpen={isOpen}
            onClose={setIsOpen}
            navLinks={NAV_LINKS_SIGN_OUT}
          />
          <SignInButton>
            <Button className="">Sign In</Button>
          </SignInButton>
        </SignedOut>
      </Suspense>
      <Suspense>
        <SignedIn>
          <NavigationMenu
            isMobile={isMobile}
            isOpen={isOpen}
            onClose={setIsOpen}
            navLinks={NAV_LINKS_SIGN_IN}
          />
          <div className="w-[50px] h-[50px] order-3">
            <UserButton
              appearance={{
                elements: {
                  userButtonAvatarBox: { width: '100%', height: '100%' },
                },
              }}>
              <UserButton.UserProfilePage
                label="Pilot Zone"
                url="custom"
                labelIcon={<UserRoundPen className="w-4.5 h-4.5" />}>
                <PilotProfile />
              </UserButton.UserProfilePage>
              <UserButton.UserProfilePage label="account" />
              <UserButton.UserProfilePage label="security" />
            </UserButton>
          </div>
        </SignedIn>
      </Suspense>
    </nav>
  );
};
