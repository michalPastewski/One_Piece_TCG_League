import { SpecialButton } from '@/components/ui/buttons';
import { PageWrapper } from '@/components/ui/pageWrapper';
import {RulesSection} from '@/components/views/regulations/rulesSection';

export default function Regulations() {
  return (
    <PageWrapper label="REGULATIONS">
      <section
        id="regulation_nav"
        className="flex items-center justify-evenly mt-8 border-t border-b border-border rounded-lg py-4 md:py-8">
        <SpecialButton label="Rules"></SpecialButton>
        <SpecialButton label="Format"></SpecialButton>
      </section>
        <RulesSection />
    </PageWrapper>
  );
}
