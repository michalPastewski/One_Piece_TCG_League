import { DeckSubmissionSection } from '@/components/views/regulations/deckSubmissionSection';
import { LeagueSection } from '@/components/views/regulations/leagueSection';
import { MatchSection } from '@/components/views/regulations/matchSection';
import { PointSection } from '@/components/views/regulations/pointSection';
import { REGULATION } from '@/constants/contentDescriptions';

export default function Format() {
  return (
    <section className="mt-8 md:p-4 lg:p-6 text-center max-w-[900px] mx-auto">
      <h3 className="text-lg md:text-2xl w-fit font-titanOne border-b-4 border-primary rounded-lg px-8 m-auto mb-4">
        {REGULATION.FORMAT.TITLE}
      </h3>
      <LeagueSection />
      <MatchSection />
      <PointSection />
      <DeckSubmissionSection />
    </section>
  );
}
