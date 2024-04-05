"use client";

import React from 'react';
import { useSession } from 'next-auth/react';

import Auditions from '@/components/shared/Auditions';



const Home = () => {
  const { data: session, status } = useSession()
  

  if(status!=="authenticated"){
    return (
      <div>
      <h3>User Not logged in</h3>
      </div>
    )
  }

return (
    <section className='px-5'>
      <div className='flex-col gap-4 flex'>
        <h3>Welcome {session?.user?.email}</h3>
        <Auditions/>
      </div>
     </section>
  )
}

export default Home