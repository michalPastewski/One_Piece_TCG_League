'use client';
import { SpecialButton } from '@/components/ui/buttons';
import { PageWrapper } from '@/components/ui/pageWrapper';
import { Format } from '@/components/views/regulations/format';
import { RulesSection } from '@/components/views/regulations/rules';
import { useState } from 'react';

export default function Regulations() {
  const [isFormatView, setIsFormatView] = useState<boolean>(true);

  return (
    <PageWrapper label="REGULATIONS">
      <section
        id="regulation_nav"
        className="flex items-center justify-evenly mt-8 border-t border-b border-border rounded-lg py-4 md:py-8">
        <SpecialButton
          label="Format"
          onClick={() => setIsFormatView(true)}></SpecialButton>
        <SpecialButton
          label="Rules"
          onClick={() => setIsFormatView(false)}></SpecialButton>
      </section>
      {isFormatView ? <Format /> : <RulesSection />}
    </PageWrapper>
  );
}
