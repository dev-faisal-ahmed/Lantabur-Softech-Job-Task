import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import { Toaster } from 'sonner';
import { Navbar } from './_components/navbar';
import '../globals.css';
import { cookies } from 'next/headers';

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
  const token = cookies().get('user');

  return (
    <html lang='en'>
      <body className={`${inter.className}`}>
        <Navbar token={token?.value!} />
        {children}
        <Toaster richColors />
      </body>
    </html>
  );
}
