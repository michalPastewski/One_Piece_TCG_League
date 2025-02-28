import SideMenuImage from '@/assets/image/sidebar-one-piece.png';
import { X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

type NavMenuProps = {
  isMobile: boolean;
  isOpen: boolean;
  onClose: (isOpen: boolean) => void;
};

export const NavigationMenu: React.FC<NavMenuProps> = ({
  isMobile,
  isOpen,
  onClose,
}) => {
  const handleOnClose = () => {
    onClose(!isOpen);
  };

  return (
    <ul
      className={
        isMobile
          ? `absolute top-0 ${
              isOpen ? 'open-nav' : 'close-nav'
            } w-2/3 h-screen flex flex-col gap-6 bg-primary border-r-secondary border-r-8`
          : 'flex h-14 items-center justify-between gap-4'
      }>
      {isMobile && (
        <X
          className="self-end my-2 mx-3 text-border min-h-8 w-auto"
          onClick={handleOnClose}
        />
      )}

      <li className={isMobile ? 'nav-link-mobile' : 'nav-link basic-hover'}>
        <Link href="/">Home</Link>
      </li>
      <li className={isMobile ? 'nav-link-mobile' : 'nav-link basic-hover'}>
        <Link href="/">Regulations</Link>
      </li>
      <li className={isMobile ? 'nav-link-mobile ' : 'nav-link basic-hover'}>
        <Link href="/">Leadership</Link>
      </li>
      <li className={isMobile ? 'nav-link-mobile' : 'nav-link basic-hover'}>
        <Link href="/">Match-ups</Link>
      </li>

      {isMobile && (
        <Image
          src={SideMenuImage}
          alt="One Piece character image"
          className="mt-auto"
        />
      )}
    </ul>
  );
};
