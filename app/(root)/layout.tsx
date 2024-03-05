import { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import { Toaster } from 'sonner';
import type { Metadata } from 'next';
import '../globals.css';
import { Navbar } from './_components/navbar/navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'EduAcademy',
  description: 'This is a app to show my skills in Next Js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className}`}>
        <Navbar />
        {children}
        <Toaster richColors />
      </body>
    </html>
  );
}
