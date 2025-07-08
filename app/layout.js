import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Tech Fix Servicess',
  description: '24/7 Home Appliance Repair in Doha, Qatar',
};


export default async function RootLayout({ children }) {


  return (
    <html lang="en">
      <body className={`bg-yellow-50 ${inter.className}`}>
        {children}
      </body>
    </html>
  );
}