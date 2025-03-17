import { CardContainer } from '@/components/ui/cardContainer';
import { CardItem } from '@/components/ui/cardItem';
import { REGULATION } from '@/constants/contentDescriptions';

const pointItems = Object.values(REGULATION.FORMAT.LEAGUE_POINT_SYSTEM.ITEMS);

export const PointSection = () => {
  return (
    <CardContainer>
      <CardItem title={REGULATION.FORMAT.LEAGUE_POINT_SYSTEM.TITLE}>
        <p className="p-1 md:p-4 mb-2 md:mb-4">
          {REGULATION.FORMAT.LEAGUE_POINT_SYSTEM.DESCRIPTION}
        </p>
        {pointItems.map((item, index) => {
          return (
            <div key={index} className="font-semibold">
              {item}
            </div>
          );
        })}
      </CardItem>
    </CardContainer>
  );
};
