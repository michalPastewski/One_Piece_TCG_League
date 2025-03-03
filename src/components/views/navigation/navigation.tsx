'use client';
import NavLogo from '@/assets/image/nav_logo.png';
import { NavigationMenu } from '@/components/views/navigation/navigationMenu';
import { useIsMobile } from '@/hooks/useMobile';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isMobile: boolean = useIsMobile() ?? false;

  return (
    <nav className="fixed flex items-center justify-between w-screen h-[60px] px-2 lg:px-4 z-10 bg-primary">
      {isMobile && <Menu className="w-9 h-8" onClick={() => setIsOpen(true)} />}
      <Image
        src={NavLogo}
        alt="ONE PIECE League image"
        className="w-auto h-14"
      />
      <Link
        href="/"
        className={`border-border border p-1 rounded-lg hover:bg-secondaryLight basic-active text-sm order-3`}>
        LOG IN
      </Link>
      <NavigationMenu isMobile={isMobile} isOpen={isOpen} onClose={setIsOpen} />
    </nav>
  );
};
