import { Dropdown } from '@/components/ui/dropdown';
import { PageWrapper } from '@/components/ui/pageWrapper';
import { Table } from '@/components/ui/table';

// TODO: add real data from server!!
const DB_SEASONS: string[] = ['season_1', 'season_2', 'season_3'];
const DB_LEADERBOARD = {
  headers: ['Rank', 'Nick', 'Points', 'W', 'L', 'Conf', 'Leader'],
  body: [
    {
      rank: 1,
      nick: 'Slizzle',
      points: 9,
      W: 3,
      L: 1,
      conf: 4,
      leader: 'Read Shanks',
    },
    {
      rank: 2,
      nick: 'Marple',
      points: 7,
      W: 2,
      L: 2,
      conf: 4,
      leader: 'Blue Dofflamingo',
    },
    {
      rank: 3,
      nick: 'Henjo',
      points: 5,
      W: 0,
      L: 4,
      conf: 4,
      leader: 'Yellow Enel',
    },
  ],
};

export default function Leadership() {
  return (
    <PageWrapper label="LEADERSHIP">
      <section className="mt-2">
        <Dropdown optionsData={DB_SEASONS} />
      </section>
      <Table
        headerData={DB_LEADERBOARD.headers}
        bodyData={DB_LEADERBOARD.body}
      />
    </PageWrapper>
  );
}
