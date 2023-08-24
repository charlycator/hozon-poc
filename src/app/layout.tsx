'use client'

import { FC } from 'react';

import { AuthProvider } from '@context';

import './globals.css';
import { Roboto } from "next/font/google";
import "tw-elements/dist/css/tw-elements.min.css";
const roboto = Roboto({ weight: "400", subsets: ["latin"] });

interface props {
  children: React.ReactNode,
}

const RootLayout: FC<props> = ({ children }) => {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}

export default RootLayout;
