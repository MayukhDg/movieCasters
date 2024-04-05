"use client"

import React, { useEffect, useState } from 'react';
import { useSession, signIn, signOut } from "next-auth/react"
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Navbar = () => {
   
  const { data: session, status } = useSession()

  

    return (
    <nav className='flex justify-between items-center p-5'>
     {!session?.user?.email && <Button  onClick={() => signIn("google")}>Log In</Button>}
     { session?.user?.email && <Button  onClick={() => signOut()}>Log Out</Button>  }
    </nav>
  )
}

export default Navbar