import { CardContainer } from '@/components/ui/CardContainer';
import { CardItem } from '@/components/ui/CardItem';
import { REGULATION } from '@/constants/contentDescriptions';

export const DeckSubmissionSection = () => {
  return (
    <CardContainer>
      <CardItem title={REGULATION.FORMAT.DECK_SUBMISSION.TITLE}>
        <p className="p-1 md:p-4 mb-2 md:mb-4">
          {REGULATION.FORMAT.DECK_SUBMISSION.DESCRIPTION}
        </p>
       
      </CardItem>
    </CardContainer>
  );
};
