import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

import AppBg from "@/public/assets/app-bg.png";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TikTok Video Downloader - Download TikTok Videos without Watermark",
  description:
    "Download TikTok videos without watermark for free. Just paste the link and download the video in high quality.",

  // open graph
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tiktok-video-downloader-five.vercel.app/",
    images: [
      {
        url: AppBg.src,
        width: 512,
        height: 512,
        alt: "TikTok Video Downloader",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {" "}
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
  );
}
