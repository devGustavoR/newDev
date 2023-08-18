import {
  Bai_Jamjuree as BaiJamjuree,
  League_Spartan as League,
  Poppins,
  Roboto_Flex as Roboto,
} from 'next/font/google'
import { ReactNode } from 'react'
import './globals.css'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })

const baiJamjuree = BaiJamjuree({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-bai-Jamjuree',
})

const league = League({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-league-spartan',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: '300',
  variable: '--font-poppins',
})

export const metadata = {
  title: 'devGustavoR',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body
        className={`${roboto.variable} ${baiJamjuree.variable} ${poppins.variable} ${league.variable} font-mono text-gray-100 bg-gray-900`}
      >
        {children}
      </body>
    </html>
  )
}
