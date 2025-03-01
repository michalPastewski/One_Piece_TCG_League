type HeaderProps = {
  children: React.ReactNode;
  label: string;
};
export const HeaderWrapper: React.FC<HeaderProps> = ({ children, label }) => {
  return (
    <section className="w-4/5 mx-auto text-center bg-green-600">
      <header>{label}</header>
      {children}
    </section>
  );
};
