import { PageWrapper } from '@/components/ui/pageWrapper';
import { SignUp } from '@clerk/nextjs';

export default function Page() {
  return (
    <PageWrapper label='Sign Up'>
      <div className="flex items-center justify-center mt-12">
        <SignUp />
      </div>
    </PageWrapper>
  );
}
