import { Dropdown } from '@/components/ui/dropdown';
import { PageWrapper } from '@/components/ui/pageWrapper';
import { Table } from '@/components/ui/table';
import { DB_MATCHUPS, DB_SEASONS } from '@/server/TEST_DATA';

const HEADER_TITLE = [
  'Week',
  'Pilot 1',
  'Leader',
  'Pilot 2',
  'Leader',
  'Result',
];
const PREV_MATCHUPS = DB_MATCHUPS.season_1.week_1.games;
const NEXT_MATCHES = DB_MATCHUPS.season_1.week_2.games;

export default function Matches() {
  return (
    <PageWrapper label="Matches">
      <div>
        <section className="mt-4">
          <Dropdown optionsData={DB_SEASONS} />
        </section>
        <h5 className="w-fit mx-auto text-lg font-titanOne">NEXT MATCH UPS</h5>
        <Table headerData={HEADER_TITLE} bodyData={NEXT_MATCHES} />
      </div>
      <div className="mt-8">
        <section>
          <Dropdown optionsData={DB_SEASONS} />
        </section>
        <h5 className="w-fit mx-auto text-lg font-titanOne">
          PREVIOUS MATCH UPS
        </h5>
        <Table headerData={HEADER_TITLE} bodyData={PREV_MATCHUPS} />
      </div>
    </PageWrapper>
  );
}
