import { SpecialButton } from '@/components/ui/buttons';
import { HOME } from '@/constants/contentDescriptions';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className="absolute p-6 z-10 grid grid-cols-2 grid-row-3 gap-y-8 sm:ml-12 sm:mr-12 md:gap-y-24 md:mt-16 md:ml-16 md:w-4/5 lg:w-3/4 lg:ml-24 xl:w-1/2 2xl:ml-40">
      <div className="text-border col-span-2 row-span-1 w-72 lg:w-full">
        <h1 className="font-extrabold text-7xl md:text-8xl font-titanOne tracking-widest">
          ONE PIECE
        </h1>
        <h3 className="text-2xl md:text-3xl font-semibold">TCG LEAGUE</h3>
      </div>
      <div className="flex md:flex-col md:m-auto gap-6 col-span-2 md:col-start-2 md:row-start-2 md:row-end-4 font-semibold justify-self-center md:content-center">
        <SpecialButton label="Join us" />
        <SpecialButton label="Format">
          <Link href="/regulation" />
        </SpecialButton>
      </div>
      <div className="bg-opacityBg col-span-2 p-4 md:p-5 md:py-8 rounded-lg md:col-span-1 md:row-start-2 md:row-end-4">
        <h3 className="header_3">
          {HOME.HEADER.GoalTitle}L
        </h3>
        <p className="text-wrap text-justify tracking-wide text-xl">
          {HOME.HEADER.GoalDescription}
        </p>
      </div>
    </header>
  );
};
