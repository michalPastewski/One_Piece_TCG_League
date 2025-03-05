type PageWrapperProps = {
  children: React.ReactNode;
  label?: string;
};
export const PageWrapper: React.FC<PageWrapperProps> = ({
  children,
  label,
}) => {
  return (
    <main className="w-4/5 mx-auto  bg-green-600 z-20">
      {label && <header className="text-center">{label}</header>}
      {children}
    </main>
  );
};
