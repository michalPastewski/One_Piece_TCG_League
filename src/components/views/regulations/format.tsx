import { REGULATION } from '@/constants/contentDescriptions';
import { DeckSubmissionSection } from './deckSubmissionSection';
import { LeagueSection } from './leagueSection';
import { MatchSection } from './matchSection';
import { PointSection } from './pointSection';

export const Format = () => {
  return (
    <section className="mt-8 md:p-4 lg:p-6 text-center max-w-[900px] mx-auto">
      <h3 className="text-lg w-fit font-titanOne border-b-4 border-primary rounded-lg px-8 m-auto mb-4">
        {REGULATION.FORMAT.TITLE}
      </h3>
      <LeagueSection />
      <MatchSection />
      <PointSection />
      <DeckSubmissionSection />
    </section>
  );
};
