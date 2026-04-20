import Sidebar from "@/components/layout/Sidebar";
import { Header } from "@/components/ui";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="wrapper grid grid-cols-[300px,minmax(0,1fr)] h-screen bg-base text-base-foreground">
      <Sidebar></Sidebar>
      <main>
        <Header></Header>
        {children}
      </main>
    </div>
  );
}
