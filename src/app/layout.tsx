import type { Metadata } from "next";
import { Geist, Geist_Mono, Literata } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const literata = Literata({
  variable: "--font-literata",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Page & Spine | Books & Blog",
    template: "%s | Page & Spine",
  },
  description:
    "Discover curated books and reading inspiration. Page & Spine—your next favorite read starts here.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${literata.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
