import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "../globals.css";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["cyrillic-ext"],
  preload: true,
});

export const metadata: Metadata = {
  title: "Kanigara Nurseries - Grow with Us",
  description: "Kanigara Nurseries is here to make your dream green space come true with high quality plants.",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Kanigara Nurseries - Grow with Us",
    description: "Kanigara Nurseries is here to make your dream green space come true with high quality plants.",
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
    description: "Kanigara Nurseries is here to make your dream green space come true with high quality plants.",
    images: ["https://www.kanigaranurseries.com/images/hero.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <body className={`${jakartaSans.variable} antialiased scroll-smooth`}>{children}</body>;
}
