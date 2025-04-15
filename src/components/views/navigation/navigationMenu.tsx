import SideMenuImage from '@/assets/image/sidebar-one-piece.png';
import { NavLinks } from '@/constants/navigation';
import { X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

type NavMenuProps = {
  isMobile: boolean;
  isOpen: boolean;
  onClose: (isOpen: boolean) => void;
  navLinks: NavLinks;
};

export const NavigationMenu: React.FC<NavMenuProps> = ({
  isMobile,
  isOpen,
  onClose,
  navLinks,
}) => {
  const handleOnClose = () => {
    onClose(!isOpen);
  };

  return (
    <ul
      className={
        isMobile
          ? `absolute top-0 left-[-75vw] ${
              isOpen ? 'open-nav' : 'close-nav'
            } w-2/3 h-screen flex flex-col gap-8 bg-primary border-r-secondary border-r-8`
          : 'flex h-12 items-center justify-between gap-4 shrink xl:max-w-1/2 xl:gap-8 bg-background rounded-2xl py-2 px-4 z-50'
      }>
      {isMobile && (
        <X
          className="self-end my-2 mx-3 text-border min-h-8 w-auto"
          onClick={handleOnClose}
        />
      )}

      {navLinks.map((link, i) => {
        return isMobile ? (
          <Link
            href={link.path}
            onClick={handleOnClose}
            key={i}
            className="nav-link-mobile basic-mobile-hover basic-active">
            {link.name}
          </Link>
        ) : (
          <Link
            href={link.path}
            key={i}
            className="nav-link basic-hover basic-active">
            {link.name}
          </Link>
        );
      })}

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
