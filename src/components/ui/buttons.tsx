import Button_BG from '@/assets/image/hero_button.png';
import Image from 'next/image';
import { ReactNode } from 'react';

type SpecialButtonProp = {
  label: string;
  children?: ReactNode;
};

export const SpecialButton: React.FC<SpecialButtonProp> = ({
  label,
  children,
}) => {
  return (
    <button className="relative hover:scale-125 hover:text-secondary transition-scale duration-75 ease-out">
      <Image
        src={Button_BG}
        alt="hero button background"
        className="w-28 h-9 md:w-36 md:h-12"
      />
      <span className="absolute top-2.5 md:top-3.5 left-8 text-sm md:text-base" >{label}</span>
      {children}
    </button>
  );
};
