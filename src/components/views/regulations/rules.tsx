import { RecordingSection } from '@/components/views/regulations/recordingSection';
import { REGULATION } from '@/constants/contentDescriptions';
import { DeckSection } from './deckSection';
import { MatchupSection } from './matchupSection';
import { OfficialRule } from './officialRule';

export const RulesSection = () => {
  return (
    <section className="mt-8 md:p-4 lg:p-6 text-center max-w-[900px] mx-auto">
      <h3 className="text-lg w-fit font-titanOne border-b-4 border-primary rounded-lg px-8 m-auto mb-4">
        {REGULATION.RULES.TITLE}
      </h3>
      <OfficialRule />
      <MatchupSection />
      <RecordingSection />
      <DeckSection />
    </section>
  );
};
