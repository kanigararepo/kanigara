import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "../globals.css";

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
  return <body className={`${jakartaSans.variable} antialiased scroll-smooth`}>{children}</body>;
}
