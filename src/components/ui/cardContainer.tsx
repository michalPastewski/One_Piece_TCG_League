type CardContainerProps = {
  children: React.ReactNode;
};

export const CardContainer: React.FC<CardContainerProps> = ({ children }) => {
  return (
    <article className="section_shadow p-2 mt-4 md:mt-8">{children}</article>
  );
};
