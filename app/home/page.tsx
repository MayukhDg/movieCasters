import { currentUser } from '@clerk/nextjs'
import React from 'react'
import Auditions from '@/components/shared/Auditions';
import { fetchAllAuditions } from '@/lib/actions/audition.actions';


const page = async() => {
  
  const user = await currentUser();
 
  
  return (
    <div>
     Welcome {user?.id}
     <Auditions />
    </div>
  )
}

export default page