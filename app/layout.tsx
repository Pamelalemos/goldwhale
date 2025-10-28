// app/layout.tsx
import type { Metadata } from 'next'
import { Press_Start_2P } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header';
import { Web3Provider } from '@/components/Web3Provider';
import { AOSInit } from '@/components/AOSInit';



const pressStart2P = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-press-start',
});

export const metadata: Metadata = {
  title: 'Gold Whale Token',
  description: 'Surfing the crypto wave with 90s Wall Street vibes. Neon screens, market hustle, and the thrill of the trade.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${pressStart2P.variable}`}>
      <AOSInit /> 
      <body className="font-pixel">
       
        
        <Web3Provider>
        <div
          className="min-h-screen bg-cover bg-center" 
          style={{ 
            backgroundImage: "url('/Offidegordon.png')", 
            backgroundAttachment: 'fixed', 
          }}
        >
          <Header />
          {children}
        </div>
        </Web3Provider>
      </body>
    </html>
  )
}