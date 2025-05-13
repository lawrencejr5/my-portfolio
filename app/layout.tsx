import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./styles/style.scss";
import "./styles/style.responsive.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Oputa Lawrence",
  description: "Oputa Lawrence's portfolio",
  icons: {
    icon: "favicon.ico",
    shortcut: "favicon.ico",
    apple: "favicon.ico",
  },
};

export const viewport = {
  themeColor: "#f2b064",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
