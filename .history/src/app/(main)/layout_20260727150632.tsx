import MainLayoutShell from "@/components/layout/MainLayoutShell";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <MainLayoutSShell>{children}</MainLayoutSShell>;
}
