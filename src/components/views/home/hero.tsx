import HERO_BLEND from '@/assets/image/hero_blend.png';
import HERO_IMG from '@/assets/image/onepiece-hero.webp';
import Image from 'next/image';
import { Header } from './header';

export const Hero = () => {
  return (
    <>
      <Header />
      <Image
        src={HERO_IMG}
        alt="Background Image"
        className="h-[65vh] object-cover contrast-[1.8] opacity-40"
      />
      <Image
        src={HERO_BLEND}
        alt="hero_blend"
        className="absolute top-[40vh] left-0 w-full h-[40vh]"
      />
    </>
  );
};
