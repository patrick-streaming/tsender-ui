import './globals.css'
import type { Metadata } from 'next'
import { type ReactNode } from 'react'
import Header from "@/components/Header"
import { Providers } from './providers'

export const metadata: Metadata = {
  title: 'TSender',
  description: 'Hyper gas-optimized bulk ERC20 token transfer',
}

export default function RootLayout(props: { children: ReactNode }) {
  return (
    <html lang="en">
      <body >
        <Providers>
          <Header />
          {props.children}
        </Providers>
      </body>
    </html >
  )
}
