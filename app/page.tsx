import React from 'react';
import { currentUser } from '@clerk/nextjs';
import Auditions from '@/components/shared/Auditions';
import { updateUser } from '@/lib/actions/user.actions';
import { redirect } from 'next/navigation'
import { useAuth } from '@clerk/clerk-react';



const Home = async() => {
 
  const user = await currentUser();
   
  if(!user) return null;
 
  const loggedInUser = await updateUser({
    userName: user?.username as string, 
    email:user?.emailAddresses[0].emailAddress as string, 
    clerkId: user?.id  as string, 
    image:user?.imageUrl as string  
  })

return (
    <section className='px-5'>
      <div className='flex-col gap-4 flex'>
        <h3>Welcome {loggedInUser?._id}</h3>
        <Auditions/>
      </div>
     </section>
  )
}

export default Home