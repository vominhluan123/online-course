import { manrope, roboto } from "@/lib/fonts";
import type { Metadata } from "next";
import "./globals.css";

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
    <html
      lang="vi"
      className={`${manrope.variable} ${roboto.variable} h-full antialiased`}
    >
      <body className="flex flex-col min-h-full">
        <div className="wrapper grid grid-cols-[300px,minmax(0,1fr)]">
          <aside className="sidebar">Sidebar</aside>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
