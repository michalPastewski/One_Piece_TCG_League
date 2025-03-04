import { SpecialButton } from '@/components/ui/buttons';
import { HOME } from '@/constants/contentDescriptions';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className="absolute p-6 z-10 grid grid-cols-2 gap-8">
      <div className="text-border col-span-2">
        <h1 className="font-extrabold text-8xl">ONE PIECE</h1>
        <h3 className="text-3xl font-semibold">TCG LEAGUE</h3>
      </div>
      <div className="flex gap-6 col-span-2 font-semibold justify-self-center">
        <SpecialButton label="Join us" />
        <SpecialButton label="Format">
          <Link href="/regulation" />
        </SpecialButton>
      </div>
      <div className="bg-opacityBg col-span-2 p-4 mt-2 rounded-lg">
        <h3 className="text-2xl font-semibold mb-2">
          {HOME.HEADER.GoalTitle}L
        </h3>
        <p className="text-wrap text-justify tracking-wide text-xl">
          {HOME.HEADER.GoalDescription}
        </p>
      </div>
    </header>
  );
};
