import { manrope, roboto } from "@/styles/fonts";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import "../styles/globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";

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
      <html
        lang="vi"
        className={`${manrope.variable} ${roboto.variable}`}
        suppressHydrationWarning
      >
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
