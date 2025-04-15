import { titanOne } from '@/assets/fonts';
import { Button } from '@/components/ui/buttons';
import { PageWrapper } from '@/components/ui/pageWrapper';
import { Hero } from '@/components/views/home/hero';
import { NewsSection } from '@/components/views/home/newsSection';
import { HOME } from '@/constants/contentDescriptions';
import { SignInButton } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default async function Home() {
  const { userId } = await auth();

  if (userId) {
    redirect('/dashboard');
  }

  return (
    <>
      <Hero />
      <PageWrapper>
        <NewsSection />
        <article className="text-center md:px-12">
          <h4 className={`${titanOne.className} mt-12 text-xl md:text-3xl`}>
            {HOME.CONTENT.TITLE}
          </h4>
          <p className="mt-4">{HOME.CONTENT.DESCRIPTION}</p>
          <p className="mt-2 text-primary">{HOME.CONTENT.DESCRIPTION_NIT}</p>
          <div className="flex flex-col items-center gap-4 text-sm mt-4">
            <Link href="/regulations/format">
              <Button>Find out more about the Format here!</Button>
            </Link>
            <SignInButton>
              <Button appearance="accent">Sign up</Button>
            </SignInButton>
          </div>
        </article>
      </PageWrapper>
    </>
  );
}
