import { Logo } from "./_components/Logo";

const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex h-full flex-col gap-4 justify-center items-center">
      <Logo />
      {children}
    </div>
  );
};

export default AuthLayout;
