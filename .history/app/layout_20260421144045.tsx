import { ClerkProvider } from "@clerk/nextjs";
import { manrope, roboto } from "@/styles/fonts";
import "../styles/globals.css";
import type { Metadata } from "next";
import { cn } from "@/lib/utils";


export const metadata: Metadata = {
  title: "Online Course",
  description: "Nền tảng học lập trình trực tuyến",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="vi" className={cn(manrope.variable, roboto.variable)}>
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
