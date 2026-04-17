import Sidebar from "@/components/layout/Sidebar";
import { manrope, roboto } from "@/styles/fonts";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Online Coures",
  description: "Nền tảng học lập trình trực tuyến",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="vi" className={`${manrope.variable} ${roboto.variable}`}>
        <body>
          <div className="wrapper grid grid-cols-[300px,minmax(0,1fr)] h-screen bg-base text-base-foreground">
            <Sidebar></Sidebar>
            <main>{children}</main>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
