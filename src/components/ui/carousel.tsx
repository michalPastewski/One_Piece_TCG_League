import { CircleChevronLeft, CircleChevronRight } from 'lucide-react';
import { ReactNode } from 'react';

type CarouselProp = {
  children: ReactNode;
};
export const Carousel: React.FC<CarouselProp> = ({ children }) => {
  return (
    <article className="border border-border p-4 rounded-lg h-72 md:h-[50vh] md:min-h-72 flex flex-col items-center justify-between">
      <div>{children}</div>
      <div className="w-full flex justify-between ">
        <CircleChevronLeft className="text-secondary hover:text-primary self-end" />
        <div className="flex items-center gap-2">
          <span className="circle_decoration circle_active"></span>
          <span className="circle_decoration"></span>
          <span className="circle_decoration"></span>
        </div>
        <CircleChevronRight className="text-secondary hover:text-primary self-end" />
      </div>
    </article>
  );
};
