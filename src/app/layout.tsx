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
  title: "Kanigara Nurseries - Grow with Us",
  description: "Kanigara Nurseries hadir untuk mewujudkan ruang hijau impian Anda dengan tanaman berkualitas tinggi.",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Kanigara Nurseries - Grow with Us",
    description: "Kanigara Nurseries hadir untuk mewujudkan ruang hijau impian Anda dengan tanaman berkualitas tinggi.",
    url: "https://www.kanigaranurseries.com",
    siteName: "Kanigara Nurseries",
    images: [
      {
        url: "https://www.kanigaranurseries.com/images/hero.png",
        width: 1200,
        height: 630,
        alt: "Kanigara Nurseries Preview Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kanigara Nurseries - Grow with Us",
    description: "Kanigara Nurseries hadir untuk mewujudkan ruang hijau impian Anda dengan tanaman berkualitas tinggi.",
    images: ["https://www.kanigaranurseries.com/images/hero.png"],
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
        <meta name="google-site-verification" content="LmqFd-BaksgDrNubYuaZf0JA7ulvw_ijYLZZy2N-YDY" />
      </Head>
      <body className={`${jakartaSans.variable} antialiased scroll-smooth`}>{children}</body>
    </html>
  );
}
