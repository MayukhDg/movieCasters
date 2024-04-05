"use client";

import { SessionProvider } from "next-auth/react";
import React from "react";
import { SessionInterface } from "@/types";



const Provider = ({children, session}:{ children:React.ReactNode, session:SessionInterface }  )=>{
    return (
        <SessionProvider session={session} >
            {children}
        </SessionProvider>
    )
}


export default Provider;