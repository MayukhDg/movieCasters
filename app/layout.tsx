import type { Metadata } from "next";
import { Roboto } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import "./globals.css";
import Navbar from "@/components/shared/Navbar";

 const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"], 
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "A one-stop shop for all latest movie/TV auditions",
  description: "A one-stop shop for all latest movie/TV auditions",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) 
{
  return (
    <ClerkProvider>
     <html lang="en">
      <body className={roboto.className}>
        <Navbar/>
        {children}
        </body>
    </html>
    </ClerkProvider>
    
  );
}
