'use client';
import NavLogo from '@/assets/image/nav_logo.png';
import { Button } from '@/components/ui/buttons';
import { NavigationMenu } from '@/components/views/navigation/navigationMenu';
import { useIsMobile } from '@/hooks/useMobile';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense, useState } from 'react';

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
          <div className="w-[50px] h-[50px] order-3">
            <SignInButton>Sign In</SignInButton>
          </div>
        </SignedOut>
      </Suspense>
      <Suspense>
        <SignedIn>
          <NavigationMenu
            isMobile={isMobile}
            isOpen={isOpen}
            onClose={setIsOpen}
          />
          <div className="w-[50px] h-[50px] order-3">
            <UserButton
              appearance={{
                elements: {
                  userButtonAvatarBox: { width: '100%', height: '100%' },
                },
              }}
            />
          </div>
        </SignedIn>
      </Suspense>
    </nav>
  );
};
