import type { Metadata } from "next";
import { Manrope, Roboto } from "next/font/google";
import "./globals.css";



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
