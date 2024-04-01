import React from 'react';
import { currentUser } from '@clerk/nextjs';
import Auditions from '@/components/shared/Auditions';



const Home = async() => {
 
  const user = await currentUser();

return (
    <section className='px-5'>
      <div className='flex-col gap-4 flex'>
        <h3>Welcome {user?.id}</h3>
        <Auditions/>
      </div>
     </section>
  )
}

export default Home