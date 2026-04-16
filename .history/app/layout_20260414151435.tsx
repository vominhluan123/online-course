import type { Metadata } from "next";
import "./globals.css";
import { manrope, roboto } from "@/lib/fonts";

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
      <body className="flex flex-col min-h-full">{children}</body>
    </html>
  );
}
