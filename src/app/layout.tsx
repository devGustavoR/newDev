import { Inter, Roboto_Mono } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});

export const metadata = {
  title: "devGustavoR",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br" className={`${inter.variable} ${roboto_mono.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
