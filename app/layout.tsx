"use client";
import "./globals.css";
import { Poppins } from "@next/font/google";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <ThemeProvider attribute="class">
        <body
          className={`${poppins.className} font-poppins bg-primary-main text-white overflow-x-hidden`}
        >
          {children}
          <Analytics />
        </body>
      </ThemeProvider>
    </html>
  );
}
