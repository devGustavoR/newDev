import {
  Bai_Jamjuree as BaiJamjuree,
  League_Spartan as League,
  Poppins,
  Roboto_Flex as Roboto,
  Supermercado_One as Supermercado,
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

const supermercado = Supermercado({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-supermercado',
})

export const metadata = {
  title: 'devGustavoR',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body
        className={`${roboto.variable} ${baiJamjuree.variable} ${poppins.variable} ${league.variable} ${supermercado.variable} bg-gray-900 font-mono text-orange-150`}
      >
        {children}
      </body>
    </html>
  )
}
