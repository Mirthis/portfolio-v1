import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import ThemeProvider from "@/components/ThemeProvider";

import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Script from "next/script";

import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-mont" });

export const metadata: Metadata = {
  title: "Andrea Cardinale - Web Enginner",
  description: "Andrea Cardinale Personal Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${montserrat.variable} font-mont text-dark dark:text-light bg-light dark:bg-dark`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NavBar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
