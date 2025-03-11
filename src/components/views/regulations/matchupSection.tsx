import { CardContainer } from '@/components/ui/CardContainer';
import { CardItem } from '@/components/ui/CardItem';
import { REGULATION } from '@/constants/contentDescriptions';

const ruleItems = Object.values(REGULATION.RULES.MATCHAUPS.ITEMS);
export const MatchupSection = () => {
  return (
    <CardContainer>
      <CardItem title={REGULATION.RULES.MATCHAUPS.TITLE}>
        <ol className="list-decimal p-2 text-justify mx-auto w-11/12">
          {ruleItems.map((item, index) => {
            return ruleItems.length - 1 === index ? (
              <li key={index} className="my-2 text-primary font-semibold">
                {item}
              </li>
            ) : (
              <li key={index} className="my-2">
                {item}
              </li>
            );
          })}
        </ol>
      </CardItem>
    </CardContainer>
  );
};
