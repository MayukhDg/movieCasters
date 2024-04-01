
import React from 'react';
import { currentUser } from '@clerk/nextjs';
import { fetchUser } from '@/lib/actions/user.actions';

const page = async() => {
  
  const user = await currentUser();
 const userDetails = await fetchUser(user?.id || "")
 console.log(userDetails)
    
 return (
    <div>

    </div>
  )
}

export default page