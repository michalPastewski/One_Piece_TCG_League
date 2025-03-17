import { CardContainer } from '@/components/ui/cardContainer';
import { CardItem } from '@/components/ui/cardItem';
import { REGULATION } from '@/constants/contentDescriptions';

export const DeckSection = () => {
  return (
    <CardContainer>
      <CardItem title={REGULATION.RULES.DECK.TITLE}>
        {REGULATION.RULES.DECK.DESCRIPTION}
      </CardItem>
    </CardContainer>
  );
};
