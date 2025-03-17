import { DeckSection } from '@/components/views/regulations/deckSection';
import { MatchupSection } from '@/components/views/regulations/matchupSection';
import { OfficialRule } from '@/components/views/regulations/officialRule';
import { RecordingSection } from '@/components/views/regulations/recordingSection';
import { REGULATION } from '@/constants/contentDescriptions';

export default function RulesSection() {
  return (
    <section className="mt-8 md:p-4 lg:p-6 text-center max-w-[900px] mx-auto">
      <h3 className="text-lg md:text-2xl w-fit font-titanOne border-b-4 border-primary rounded-lg px-8 m-auto mb-4">
        {REGULATION.RULES.TITLE}
      </h3>
      <OfficialRule />
      <MatchupSection />
      <RecordingSection />
      <DeckSection />
    </section>
  );
}
