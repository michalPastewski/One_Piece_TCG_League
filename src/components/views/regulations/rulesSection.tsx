// import OP_IMG from '@/assets/image/rules_img_1.png';
// import { Button } from '@/components/ui/buttons';
import { REGULATION } from '@/constants/contentDescriptions';
// import Image from 'next/image';
// import Link from 'next/link';
import { OfficialRule } from './officialRule';

export const RulesSection = () => {
  return (
    <section className="mt-8 md:p-4 lg:p-6 text-center max-w-[900px] mx-auto">
      <h3 className="text-lg w-fit font-titanOne border-b-4 border-primary rounded-lg px-8 m-auto mb-4">
        {REGULATION.RULES.TITLE}
      </h3>
      <OfficialRule />
    </section>
  );
};
