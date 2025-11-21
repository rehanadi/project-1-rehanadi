import { Providers } from '@/features/shared/components/providers';
import clsx from 'clsx';
import type { Metadata } from 'next';
import { Quicksand } from 'next/font/google';
import './globals.css';

export const metadata: Metadata = {
  title: 'Booky',
  description: 'Book borrowing platform',
};

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal'],
  variable: '--font-quicksand',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={clsx(quicksand.variable, 'antialiased')}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
