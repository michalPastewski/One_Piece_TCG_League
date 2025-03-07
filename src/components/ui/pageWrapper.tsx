import LOGO from '@/assets/image/LOGO.png';
import { GENERAL_CONTENT } from '@/constants/contentDescriptions';
import Image from 'next/image';

type PageWrapperProps = {
  children: React.ReactNode;
  label?: string;
};
export const PageWrapper: React.FC<PageWrapperProps> = ({
  children,
  label,
}) => {
  return (
    <main className="w-4/5 lg:w-3/5 xl:w-1/2 mx-auto z-20">
      {label && (
        <header className="flex flex-col items-center  text-center mt-4 md:mt-8">
          <h3 className="header_3 md:text-3xl lg:text-4xl">
            {GENERAL_CONTENT.TITLE}
          </h3>
          <div className="flex">
            <Image
              src={LOGO}
              alt="One Piece TCG League Logo"
              className="w-6 h-6 md:w-8 md:h-8"
            />
            <h2 className="mx-2 md:text-xl">{label}</h2>
            <Image
              src={LOGO}
              alt="One Piece TCG League Logo"
              className="w-6 h-6 md:w-8 md:h-8"
            />
          </div>
        </header>
      )}
      {children}
    </main>
  );
};
