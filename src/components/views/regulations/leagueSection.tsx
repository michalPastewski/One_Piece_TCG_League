import FORMAT_IMG from '@/assets/image/format_igm.png';
import { CardContainer } from '@/components/ui/CardContainer';
import { CardItem } from '@/components/ui/CardItem';
import { REGULATION } from '@/constants/contentDescriptions';
import Image from 'next/image';

export const LeagueSection = () => {
  return (
    <CardContainer>
      <CardItem title={REGULATION.FORMAT.LEAGUE_SYSTEM.TITLE}>
        <Image
          src={FORMAT_IMG}
          alt="One Piece character image"
          className="w-20 md:w-40 mr-2 ml-1 h-auto shape_text"
        />
        <p className="p-1 md:p-4">
          {REGULATION.FORMAT.LEAGUE_SYSTEM.DESCRIPTION_1}
        </p>
        <p className="p-1 md:p-4 mt-2 text-primary font-semibold">
          {REGULATION.FORMAT.LEAGUE_SYSTEM.DESCRIPTION_2}
        </p>
      </CardItem>
    </CardContainer>
  );
};
