import { Dropdown } from '@/components/ui/dropdown';
import { PageWrapper } from '@/components/ui/pageWrapper';

// TODO: add real data from server!!
const DB_SEASONS: string[] = ['season_1', 'season_2', 'season_3'];

export default function Leadership() {
  return (
    <PageWrapper label="LEADERSHIP">
      <Dropdown optionsData={DB_SEASONS} />
    </PageWrapper>
  );
}
