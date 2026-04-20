import Sidebar from "@/components/layout/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="wrapper grid grid-cols-[300px,minmax(0,1fr)] h-screen bg-base text-base-foreground">
      <Sidebar></Sidebar>
      <div className="p-5">
        <Header></Header>
      </div>
      <main>{children}</main>
    </div>
  );
}
