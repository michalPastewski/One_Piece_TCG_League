import { PageWrapper } from '@/components/ui/pageWrapper';
import { Hero } from '@/components/views/home/hero';

export default function Home() {
  return (
    <>
      <Hero />
      <PageWrapper>
        <h3 className="header_3">NEWS</h3>
      </PageWrapper>
    </>
  );
}
