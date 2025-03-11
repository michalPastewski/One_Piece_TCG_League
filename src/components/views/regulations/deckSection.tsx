import { CardContainer } from '@/components/ui/CardContainer';
import { CardItem } from '@/components/ui/CardItem';
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
