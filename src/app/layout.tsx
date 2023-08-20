import './globals.css';
import type { Metadata } from 'next';
import { Roboto } from "next/font/google";

import "tw-elements/dist/css/tw-elements.min.css";


const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Hozon',
  description: 'Spare change to crypto',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {children}
      </body>
    </html>
  )
}
