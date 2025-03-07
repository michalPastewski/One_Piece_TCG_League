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
    <button className="relative hover:scale-125 active:text-accent transition-scale duration-75 ease-out">
      <Image
        src={Button_BG}
        alt="hero button background"
        className="w-28 h-9 md:w-36 md:h-12"
      />
      <span className="absolute top-2.5 md:top-3.5 left-8 text-secondary text-sm md:text-base">
        {label}
      </span>
      {children}
    </button>
  );
};

type ButtonProp = {
  children: ReactNode;
  appearance?: 'base' | 'accent' | 'revers';
};

export const Button: React.FC<ButtonProp> = ({ children, appearance }) => {
  let buttonBg = '';

  switch (appearance) {
    case 'accent':
      buttonBg = 'bg-accentLight hover:text-border';
      break;
    case 'revers':
      buttonBg =
        'bg-primary text-secondary hover:bg-secondaryLight hover:text-border';
      break;
    default:
      buttonBg = 'hover:text-border';
      break;
  }

  return (
    <button
      className={`w-fit p-2 px-4 border border-border rounded-lg button_shadow hover:bg-secondary ${buttonBg}`}>
      {children}
    </button>
  );
};
