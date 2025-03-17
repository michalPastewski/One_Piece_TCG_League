import BG_IMG from '@/assets/image/leaderboard_img.png';
import { Dropdown } from '@/components/ui/dropdown';
import { PageWrapper } from '@/components/ui/pageWrapper';
import { Table } from '@/components/ui/table';
import Image from 'next/image';
import {DB_SEASONS, DB_LEADERBOARD} from '@/server/TEST_DATA';


export default function Leadership() {
  return (
    <PageWrapper label="LEADERSHIP">
      <Image
        src={BG_IMG}
        alt="One Piece character"
        className="absolute top-56 md:top-64 left-1/2 w-4/5 lg:w-1/2 z-[-1] opacity-30 translate-x-[-50%]"
      />
      <section className="mt-4">
        <Dropdown optionsData={DB_SEASONS} />
      </section>
      <Table
        headerData={DB_LEADERBOARD.headers}
        bodyData={DB_LEADERBOARD.body}
      />
    </PageWrapper>
  );
}
