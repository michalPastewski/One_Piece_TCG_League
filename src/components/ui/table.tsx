interface LeaderData {
  rank: number;
  nick: string;
  points: number;
  W: number;
  L: number;
  conf: number;
  leader: string;
}

type TableProps = {
  headerData: string[];
  bodyData: LeaderData[];
};

export const Table: React.FC<TableProps> = ({ headerData, bodyData }) => {
  return (
    <table className="mt-4 w-full text-sm table-auto border-b border-primary border-collapse overflow-x-hidden">
      <thead className="border-y-2 border-primary  md:text-lg bg-secondaryLight">
        <tr>
          {headerData.map((title, index) => (
            <th key={index} className="px-1 py-2 md:p-2">
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
  );
};
