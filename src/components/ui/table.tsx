interface LeaderData {
  rank: number;
  nick: string;
  points: number;
  W: number;
  L: number;
  conf: number;
  leader: string;
  city?: string;
}

interface MatchesData {
  week: number;
  date?: string;
  confirm?: boolean;
  pilot_1: string;
  leader_1: string;
  pilot_2: string;
  leader_2: string;
  result: string;
}

type TableProps = {
  headerData: string[];
  bodyData: LeaderData[] | MatchesData[];
};

export const Table: React.FC<TableProps> = ({ headerData, bodyData }) => {
  return (
    <div className="overflow-auto">
      <table className="mt-4 min-w-full text-sm table-auto border-b border-primary border-collapse overflow-x-hidden">
        <thead className="border-y-2 border-primary  md:text-lg bg-secondaryLight">
          <tr>
            {headerData.map((title, index) => (
              <th key={index} className="p-2">
                {title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-center md:text-base">
          {bodyData.map((user, index) => (
            <tr
              key={index}
              className="border-y border-primary hover:bg-accentLight hover:border-y-2 hover:border-accentDark">
              {Object.values(user).map((item, index) => (
                <td key={index + Math.random()} className="md:p-2">
                  {item}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
