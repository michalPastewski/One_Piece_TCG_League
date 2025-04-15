import { PageWrapper } from '@/components/ui/pageWrapper';
import { SignIn } from '@clerk/nextjs';

export default function Page() {
  return (
    <PageWrapper>
      <div className="flex items-center justify-center mt-12">
        <SignIn />
      </div>
    </PageWrapper>
  );
}
