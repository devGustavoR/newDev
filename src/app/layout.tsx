import {
  Bai_Jamjuree as BaiJamjuree,
  Poppins,
  Roboto_Flex as Roboto,
} from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";

const roboto = Roboto({ subsets: ["latin"], variable: "--font-roboto" });

const baiJamjuree = BaiJamjuree({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-bai-Jamjuree",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: "300",
  variable: "--font-poppins",
});

export const metadata = {
  title: "devGustavoR",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body
        className={`${roboto.variable} ${baiJamjuree.variable} ${poppins.variable} font-mono text-gray-100 bg-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
