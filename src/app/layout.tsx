import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "react-modern-drawer/dist/index.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AzkiVaam",
  description: "Buy now pay later",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="rtl">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
