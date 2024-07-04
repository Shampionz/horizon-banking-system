import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = {
    firstName: "Pritam",
    lastName: "Majumder",
  };
  return (
    <section className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn} />
      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image alt="menu item" width={30} height={30} src="/icons/logo.svg" />
          <div>
            <MobileNav user={loggedIn} />
          </div>
        </div>
      </div>
      {children}
    </section>
  );
}