import MainLayoutShell from "@/components/layout/MainLayoutShell";
import NextTopLoader from "nextjs-toploader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MainLayoutShell>
      <NextTopLoader color="bg-" height={3} showSpinner={false} />
      {children}
    </MainLayoutShell>
  );
}
