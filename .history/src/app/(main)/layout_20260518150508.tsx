import MainLayoutShell from "@/components/layout/MainLayoutShell";
import NextTopLoader from "nextjs-toploader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MainLayoutShell>
      <NextTopLoader
        color="var(--loader-color)"
        initialPosition={0.08}
        crawlSpeed={200}
        height={3}
        crawl
        showSpinner={false}
        easing="ease"
        speed={200}
        shadow="0 0 10px var(--loader-color) ,0 0 5px var(--loader-color)"
      />
      {children}
    </MainLayoutShell>
  );
}
