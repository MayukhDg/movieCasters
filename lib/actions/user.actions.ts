"use server"

import Audition from "../models/audition.model";
import User from "../models/user.model"; 
import { connectToDB } from "../mongoose";
import { userProps } from "@/types";



export const fetchUserDetails = async({name, email, clerkId, image}:userProps)=>{
  try {
    await connectToDB();
    const user = await User.findOne({clerkId})
    if(!user){
      const newUser = await User.create({
        name, email, clerkId, image
    })
    await newUser.save();
    return JSON.parse(JSON.stringify(newUser))
    } else{
      return JSON.parse(JSON.stringify(user))
    }
  } catch (error) {
     console.log(error)
  }
}


export const fetchUser = async(clerkId:string)=>{
   try {
    await connectToDB();
    const user = await User.findOne({clerkId}).populate({
      path:"createdAuditions",
      model:Audition,
      populate:{
        path:"creator",
        model:User
      } 
    })
     return JSON.parse(JSON.stringify(user));
   } catch (error) {
     console.log(error)
   }
}



export const fetchUserFromDb = async(id:string)=>{
  try {
   await connectToDB();
   const user = await User.findById({id}).populate({
     path:"createdAuditions",
     model:Audition,
     populate:[{
       path:"creator",
       model:User
     }] 
   })
    return JSON.parse(JSON.stringify(user));
  } catch (error) {
    console.log(error)
  }
}