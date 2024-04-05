"use server"

import Audition from "../models/audition.model";
import User from "../models/user.model"; 
import { connectToDB } from "../mongoose";
import { userProps } from "@/types";






export const updateUser = async({userName, email, image}:userProps)=>{
    try {
      await connectToDB();
      const newUser = await User.findOneAndUpdate({email}, {
       email, userName, image
      },
      {upsert:true, new:true},
      
      )
      return JSON.parse(JSON.stringify(newUser))  
    } catch (error) {
      console.log(error);
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