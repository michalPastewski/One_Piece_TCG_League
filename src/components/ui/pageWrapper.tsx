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
      {label && <header className="text-center">{label}</header>}
      {children}
    </main>
  );
};
