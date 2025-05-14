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
    icon: "/images/avatars/avatar2-rounded.png",
    shortcut: "/images/avatars/avatar2-rounded.png",
    apple: "/images/avatars/avatar2-rounded.png",
  },
};

export const viewport = {
  themeColor: "#1a1a1a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        {/* Other meta tags can go here */}
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
