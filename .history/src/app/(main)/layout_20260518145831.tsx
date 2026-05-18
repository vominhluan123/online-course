import MainLayoutShell from "@/components/layout/MainLayoutShell";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MainLayoutShell>
      {" "}
      <NextTopLoader color="#2563eb" height={3} showSpinner={false} />
      {children}
    </MainLayoutShell>
  );
}
