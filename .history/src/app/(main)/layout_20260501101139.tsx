import Sidebar from "@/components/layout/Sidebar";
import { Header } from "@/components/ui";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MainLayoutShell>{children}</MainLayoutShell>;
  );
}
