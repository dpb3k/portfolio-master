import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dennis Bandavong",
  description: "Data Scientist",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* */}
      <body className="">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative z-0 bg-gradient-to-r bg-light-mode to-rose-50 dark:bg-gradient-to-r dark:from-slate-950 dark:to-slate-900">
          {children}
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
