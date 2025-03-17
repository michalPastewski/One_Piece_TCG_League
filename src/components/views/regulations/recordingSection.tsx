import RECORDING_IMG from '@/assets/image/recording-rules-img-1.jpg';
import SETUP_IMG from '@/assets/image/recording-rules-img-2.png';
import { CardContainer } from '@/components/ui/cardContainer';
import { CardItem } from '@/components/ui/cardItem';
import { ImageWithLabel } from '@/components/ui/imageWithLabel';
import { REGULATION } from '@/constants/contentDescriptions';

const recordingItems = Object.values(REGULATION.RULES.RECORDING.ITEMS);

export const RecordingSection = () => {
  console.log(recordingItems);
  return (
    <CardContainer>
      <CardItem title={REGULATION.RULES.RECORDING.TITLE}>
        <h5 className="font-semibold mt-8">
          {REGULATION.RULES.RECORDING.ITEMS_TITLE}
        </h5>
        <ol className="list-decimal p-2 text-justify mx-auto w-11/12">
          {recordingItems.map((item, index) => {
            return (
              <li key={index} className="my-2">
                {item}
              </li>
            );
          })}
        </ol>
        <div className="flex flex-col md:flex-row gap-6">
          <ImageWithLabel
            src={RECORDING_IMG}
            alt="Deck-list image"
            label="Deck-list Setup Display Example"
          />
          <ImageWithLabel
            src={SETUP_IMG}
            alt="Setup image"
            label="Examples of correct setup"
          />
        </div>
        <p className="mt-4 text-primary font-semibold">
          {REGULATION.RULES.RECORDING.DESCRIPTION}
        </p>
      </CardItem>
    </CardContainer>
  );
};
