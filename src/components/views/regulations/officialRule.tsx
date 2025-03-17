import OP_IMG from '@/assets/image/rules_img_1.png';
import { Button } from '@/components/ui/buttons';
import { CardContainer } from '@/components/ui/CardContainer';
import { CardItem } from '@/components/ui/CardItem';
import { REGULATION } from '@/constants/contentDescriptions';
import Image from 'next/image';
import Link from 'next/link';

export const OfficialRule = () => {
  return (
    <CardContainer>
      <CardItem title={REGULATION.RULES.OFFICIAL.TITLE}>
        <Image
          src={OP_IMG}
          alt="one piece character"
          className="w-16 md:w-32 mr-2 ml-1 h-auto shape_text"
        />
        <p className="p-1 mb-4">{REGULATION.RULES.OFFICIAL.DESCRIPTION}</p>
        <Button appearance="revers">
          <Link href="https://en.onepiece-cardgame.com/rules/">
            {REGULATION.RULES.OFFICIAL.BUTTON}
          </Link>
        </Button>
      </CardItem>
      <CardItem title={REGULATION.RULES.OFFICIAL.CURRENT_BANSLIST.TITLE}>
        <p className="py-2 underline decoration-solid">
          {REGULATION.RULES.OFFICIAL.CURRENT_BANSLIST.BANS_DESCRIPTION}
        </p>
        <div className="md:w-4/5 border border-border rounded-lg p-2 md:mx-4 xl:mx-8">
          <h5 className="decoration-solid">
            {REGULATION.RULES.OFFICIAL.CURRENT_BANSLIST.BANS_SUBTITLE}:
          </h5>
          <p>{REGULATION.RULES.OFFICIAL.CURRENT_BANSLIST.BANS}</p>
        </div>
      </CardItem>
    </CardContainer>
  );
};
