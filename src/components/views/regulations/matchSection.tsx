import { CardContainer } from '@/components/ui/cardContainer';
import { CardItem } from '@/components/ui/cardItem';
import { REGULATION } from '@/constants/contentDescriptions';

const wayItems = Object.values(REGULATION.FORMAT.MATCH_SYSTEM.WAYS);
export const MatchSection = () => {
  return (
    <CardContainer>
      <CardItem title={REGULATION.FORMAT.MATCH_SYSTEM.TITLE}>
        <p className="p-1 md:p-4">
          {REGULATION.FORMAT.MATCH_SYSTEM.DESCRIPTION_1}
        </p>

        <ol className="flex flex-col items-center list-decimal px-2 text-justify mx-auto w-11/12">
          {wayItems.map((item, index) => {
            return (
              <li key={index} className="my-2">
                {item}
              </li>
            );
          })}
        </ol>
        <p className="p-1 md:p-4 mt-2 text-primary font-semibold">
          {REGULATION.FORMAT.MATCH_SYSTEM.DESCRIPTION_2}
        </p>
        <p className="p-1 md:p-4 mt-8 font-semibold">
          {REGULATION.FORMAT.MATCH_SYSTEM.DESCRIPTION_3}
        </p>
      </CardItem>
    </CardContainer>
  );
};
