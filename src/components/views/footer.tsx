'use client';
import Logo from '@/assets/image/LOGO.png';
import { useIsMobile } from '@/hooks/useMobile';
import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => {
   const isMobile: boolean = useIsMobile() ?? false;

  return (
    <footer className="fixed flex items-center justify-between bottom-0 w-screen h-8 bg-primary p-2  md:py-4 lg:p-6">
      <div className="flex items-center">
        {!isMobile && (
          <Link href="/">
            <Image
              src={Logo}
              alt="OPTCGL logo"
              className="w-6 h-auto hover:scale-150 transition-transform ease-in-out"
            />
          </Link>
        )}
        <nav className="text-[0.6rem] md:text-[0.9rem] text-border p-2 ml-2">
          <ul className="flex gap-2">
            <li className="hover:text-secondary">
              <Link href="/about">About</Link>
            </li>
            <li className="hover:text-secondary border-x border-border px-2">
              <Link href="/">Contact</Link>
            </li>
            <li className="hover:text-secondary">
              <Link href="/">Privacy Policy</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="text-[.45rem] md:text-[0.5rem] lg:text-[.7rem] flex flex-col items-center hover:text-secondary">
        <p>&copy; by TaktDev 2025</p>
        <p>All rights reserved.</p>
      </div>
      <div className="text-[.7rem]">
        <button className="border-primary border p-1 rounded-lg hover:bg-secondaryLight basic-active md:text-xs mx-1">
          PL
        </button>
        <span>/</span>
        <button className="border-primary border p-1 rounded-lg hover:bg-secondaryLight basic-active md:text-xs mx-1">
          EN
        </button>
      </div>
    </footer>
  );
};
