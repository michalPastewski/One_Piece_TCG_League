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
        className="w-28 h-9"
      />
      <span className="absolute top-2.5 left-8 text-sm">{label}</span>
      {children}
    </button>
  );
};
