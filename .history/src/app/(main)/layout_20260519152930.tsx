import MainLayoutShell from "@/components/layout/MainLayoutShell";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <MainLayoutShell>{children}</MainLayoutShell>;
}
