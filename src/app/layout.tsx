import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["cyrillic-ext"],
  preload: true,
});

export const metadata: Metadata = {
  title: "Kanigara NurSeries",
  description: "Kanigara NurSeries",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <Head>
        <link rel="icon" href="/icon.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/icon.png" type="image/png" sizes="96x96" />
        <link rel="apple-touch-icon" href="/icon.png" />
      </Head>
      <body className={`${jakartaSans.variable} antialiased scroll-smooth`}>{children}</body>
    </html>
  );
}
