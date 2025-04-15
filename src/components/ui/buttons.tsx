import Button_BG from '@/assets/image/hero_button.png';
import Image from 'next/image';
import { ReactNode } from 'react';

type SpecialButtonProp = {
  label: string;
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
};

export const SpecialButton: React.FC<SpecialButtonProp> = ({
  label,
  children,
  onClick,
  className,
}) => {
  return (
    <button
      className={`relative hover:scale-125 active:text-accent transition-scale duration-75 ease-out ${className}`}
      onClick={onClick}>
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
  className?: string;
};

export const Button: React.FC<ButtonProp> = ({
  children,
  appearance,
  className,
}) => {
  let buttonBg = '';

  switch (appearance) {
    case 'accent':
      buttonBg = 'bg-accent-light hover:text-border';
      break;
    case 'revers':
      buttonBg =
        'bg-primary text-secondary hover:bg-secondary-light hover:text-border';
      break;
    default:
      buttonBg = 'hover:text-border';
      break;
  }

  return (
    <button
      className={`w-fit p-2 px-4 border border-border rounded-lg button_shadow hover:bg-secondary ${buttonBg} ${className}`}>
      {children}
    </button>
  );
};
