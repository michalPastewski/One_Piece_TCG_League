import { SpecialButton } from '@/components/ui/buttons';
import { PageWrapper } from '@/components/ui/pageWrapper';
import Link from 'next/link';

export default function RegulationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PageWrapper label="REGULATIONS">
      <section
        id="regulation_nav"
        className="flex items-center justify-evenly mt-8 border-t border-b border-border rounded-lg py-4 md:py-8">
        <Link href="/regulations/format">
          <SpecialButton label="Format" />
        </Link>
        <Link href="/regulations/rules">
          <SpecialButton label="Rules" />
        </Link>
      </section>
      {children}
    </PageWrapper>
  );
}
