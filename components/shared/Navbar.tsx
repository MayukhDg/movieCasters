"use client"

import React, { useEffect, useState } from 'react';
import { SignedIn, UserButton, SignedOut} from "@clerk/nextjs";
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Navbar = () => {
   
  const router = useRouter();

  

    return (
    <nav className='flex justify-between items-center p-5'>
    <SignedIn>
    <UserButton/>
    <div className='flex items-center gap-3'>
    <Button className='rounded-2xl' onClick={()=>router.push("/create-audition")} variant={"secondary"}>Create Audition</Button>
    <Button className='rounded-2xl' onClick={()=>router.push("/latest-auditions")} variant={"secondary"}>Latest Auditions</Button> 
      </div>     
    </SignedIn>
    </nav>
  )
}

export default Navbar