import './globals.css'
import { Inter, Poppins, Josefin_Sans } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({subsets: ['latin'], weight: '300'})
const josefin = Josefin_Sans({subsets:['latin']})

export const metadata = {
  title: 'Stock.io',
  description: 'Gerencie seu estoque de forma eficiente.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className='bg-white'>{children}</body>
    </html>
  )
}
