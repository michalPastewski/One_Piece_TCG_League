'use client';
import NavLogo from '@/assets/image/nav_logo.png';
import { useIsMobile } from '@/hooks/useMobile';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { NavigationMenu } from './ui/navigationMenu';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isMobile: boolean = useIsMobile() ?? false;

  return (
    <nav className="fixed flex items-center justify-between w-screen h-16 px-4 z-10 bg-primary">
      {isMobile && <Menu className="w-9 h-8" onClick={() => setIsOpen(true)} />}
      <Image
        src={NavLogo}
        alt="ONE PIECE League image"
        className="w-auto h-20 mt-2"
      />
      <Link
        href="/"
        className={`${
          !isMobile ? 'order-3' : 'text-sm order-3'
        } border-border border p-2 rounded-lg basic-hover`}>
        LOG IN
      </Link>
      <NavigationMenu isMobile={isMobile} isOpen={isOpen} onClose={setIsOpen}/>
    </nav>
  );
};
