import Logo from '@/assets/image/LOGO.png';
import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="fixed flex items-center justify-between bottom-0 w-screen h-8 bg-primary p-2 md:p-4 lg:p-6">
      <Link href="/">
        <Image src={Logo} alt="OPTCGL logo" className="w-6 h-auto" />
      </Link>
      <nav className="text-xs text-border p-2 ml-2">
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
      <div className="text-[.55rem] flex flex-col items-center hover:text-secondary">
        <p>&copy; by PastaDev 2025</p>
        <p>All rights reserved.</p>
      </div>
    </footer>
  );
};
