import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

type ImageWithLabelProps = {
  src: string | StaticImport;
  alt: string;
  label: string;
};
export const ImageWithLabel: React.FC<ImageWithLabelProps> = ({
  src,
  alt,
  label,
}) => {
  return (
    <div className="relative flex">
      <span className="w-4/5 bg-background absolute top-[-.65rem] left-[50%] translate-x-[-50%] text-sm text-disabled">
        {label}
      </span>
      <Image
        src={src}
        alt={alt}
        width={800}
        height={400}
        className="pt-4 px-2 border-t border-border rounded-lg"
      />
    </div>
  );
};
