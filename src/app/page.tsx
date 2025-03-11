import { Button } from '@/components/ui/buttons';
import { PageWrapper } from '@/components/ui/pageWrapper';
import { Hero } from '@/components/views/home/hero';
import { NewsSection } from '@/components/views/home/newsSection';
import { HOME } from '@/constants/contentDescriptions';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Hero />
      <PageWrapper>
        <NewsSection />
        <article className="text-center md:px-12">
          <h4 className="mt-12 text-xl md:text-3xl font-titanOne">
            {HOME.CONTENT.TITLE}
          </h4>
          <p className="mt-4">{HOME.CONTENT.DESCRIPTION}</p>
          <p className="mt-2 text-primary">{HOME.CONTENT.DESCRIPTION_NIT}</p>
          <div className="flex flex-col items-center gap-4 text-sm mt-4">
            <Button>
              <Link href="/regulations">
                Find out more about the Format here!
              </Link>
            </Button>
            <Button appearance="accent">
              <Link href="/">Sign up</Link>
            </Button>
          </div>
        </article>
      </PageWrapper>
    </>
  );
}
