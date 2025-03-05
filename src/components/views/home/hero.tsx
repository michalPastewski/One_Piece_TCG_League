import HERO_BLEND from '@/assets/image/hero_blend.png';
import HERO_IMG from '@/assets/image/onepiece-hero.webp';
import Image from 'next/image';
import { Header } from './header';

export const Hero = () => {
  return (
    <div id="hero pt-[60px] relative">
      <Header />
      <Image
        src={HERO_IMG}
        alt="Background Image"
        className="h-[510px] md:h-[660px] object-cover contrast-[1.8] opacity-40"
      />
      <Image
        src={HERO_BLEND}
        alt="hero_blend"
        className="absolute top-[371px] md:top-[521px] left-0 w-full h-[200px]"
      />
    </div>
  );
};
