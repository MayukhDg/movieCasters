import React from 'react'
import { currentUser, SignedIn, SignedOut } from "@clerk/nextjs";
import { fetchUserDetails } from '@/lib/actions/user.actions';
import ProfileButton from '@/components/shared/ProfileButton';
import Auditions from '@/components/shared/Auditions';



const Home = async() => {
  
  const user = await currentUser();
  let loggedInUser;

  if(user){
    loggedInUser = await fetchUserDetails(
      {
      name: user?.username || "User",
      email: user?.emailAddresses[0]?.emailAddress || "",
      clerkId:user?.id || "",
      image: user?.imageUrl || ""
    
      }  ) 
  }


  

  return (
    <section className='px-5'>
      <SignedIn>
      <div className='flex-col gap-4 flex'>
       <h2>Welcome {loggedInUser?.name}</h2>
       <ProfileButton id={loggedInUser?._id} />
       <Auditions />
       </div>
       </SignedIn>
        
      <SignedOut>
      <div className='flex-col gap-4 flex'>
        <h3>Check out the latest auditions happening near you</h3>
        <Auditions/>
      </div>
      </SignedOut>
     
    
    </section>
  )
}

export default Home