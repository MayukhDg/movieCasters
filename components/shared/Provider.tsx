"use client";




import { SessionInterface } from "@/types";
import { SessionProvider } from "next-auth/react";



const Provider = ({children, session}: {children:React.ReactNode, session:SessionInterface})=>{
    return (
        <SessionProvider session={session} >
            {children}
        </SessionProvider>
    )
}


export default Provider;