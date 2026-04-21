import { cn } from "@/lib/utils";
import { manrope, roboto } from "@/styles/fonts";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import "../styles/globals.css";

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
