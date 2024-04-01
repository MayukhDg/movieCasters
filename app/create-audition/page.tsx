import AuditionForm from '@/components/shared/AuditionForm';
import { fetchUserAudtions } from '@/lib/actions/audition.actions';
import { fetchUser } from '@/lib/actions/user.actions';
import { currentUser } from '@clerk/nextjs'
import React from 'react'

const page = async() => {
  
  const user = await currentUser();

  if(!user) return null;

  const currentUserDetails = await fetchUser(String(user?.id));
    
  return (
    <section className='w-screen flex justify-center' >
    <AuditionForm clerkId={currentUserDetails?.clerkId} id={currentUserDetails?._id} />
    </section>
  )
}

export default page