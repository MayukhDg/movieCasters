import type { Metadata } from "next";
import { Roboto } from 'next/font/google'
import Provider from "@/components/shared/Provider";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import { SessionInterface } from "@/types";

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
  children, session
}: Readonly<{
  children: React.ReactNode, session:SessionInterface;
}>) 
{
  return (
   
     <html lang="en">
      <Provider session={session} >
      <body className={roboto.className}>
        <Navbar/>
        {children}
        </body>
   </Provider>
          </html>
   
    
  );
}
