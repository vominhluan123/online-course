import { ThemeProvider } from "@/components/theme/theme-provider";
import { manrope, roboto } from "@/styles/fonts";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "sonner";

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
    <html
      lang="vi"
      className={`${manrope.variable} ${roboto.variable}`}
      suppressHydrationWarning
    >
      <body>
        <ClerkProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <NextTopLoader
              color="var(--loader-color)"
              initialPosition={0.08}
              crawlSpeed={200}
              height={3}
              crawl
              showSpinner={false}
              easing="ease"
              speed={200}
              shadow="0 0 10px var(--loader-color), 0 0 5px var(--loader-color)"
            />
            {children}
            <Toaster position="top-center" closeButton />
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
