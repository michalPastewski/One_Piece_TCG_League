import SideMenuImage from '@/assets/image/sidebar-one-piece.png';
import { NAV_LINKS } from '@/constants/navigation';
import { X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

type NavMenuProps = {
  isMobile: boolean;
  isOpen: boolean;
  onClose: (isOpen: boolean) => void;
};

const linksList = Object.keys(NAV_LINKS) as Array<keyof typeof NAV_LINKS>;

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

      {linksList.map((link, i) => {
        return isMobile ? (
          <li
            key={i}
            className="nav-link-mobile basic-mobile-hover basic-active">
            <Link href={NAV_LINKS[link].path} onClick={handleOnClose}>
              {NAV_LINKS[link].name}
            </Link>
          </li>
        ) : (
          <li key={i} className="nav-link basic-hover basic-active">
            <Link href={NAV_LINKS[link].path}>{NAV_LINKS[link].name}</Link>
          </li>
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
