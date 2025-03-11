type CardItemProp = {
  title: string;
  children: React.ReactNode;
};

export const CardItem: React.FC<CardItemProp> = ({ title, children }) => {
  return (
    <section className="my-4 md:my-12">
      <h4 className="font-semibold my-2">{title}</h4>
      {children}
    </section>
  );
};
