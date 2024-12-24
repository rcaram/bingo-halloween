import type { Metadata } from "next";
import { Mountains_of_Christmas } from 'next/font/google';
import "./globals.css";


const mountainsOfChristmas = Mountains_of_Christmas({
  weight: '400',
  subsets: ['latin'],
});





export const metadata: Metadata = {
  title: "Bingo de Natal Next App",
  description: "Bingo de Natal!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={mountainsOfChristmas.className}
      >
        {children}
      </body>
    </html>
  );
}
