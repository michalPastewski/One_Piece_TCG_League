import { BookOpen } from 'lucide-react';
import { Carousel } from '../../ui/carousel';

export const NewsSection = () => {
  return (
    <>
      <header className="header_3 text-center flex gap-2 items-center justify-center">
        <BookOpen className="w-3 h-auto" />
        <span className="md:text-4xl">NEWS</span>
        <BookOpen className="w-3 h-auto" />
      </header>
      <Carousel>
        <p>lorem ipsum...</p>
      </Carousel>
    </>
  );
};
