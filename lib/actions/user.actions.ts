import User from "../models/user.model"; 
import { connectToDB } from "../mongoose";


interface userProps {
  name:string,
  email:string,
  clerkId:string
  
}


export const createNewUser = async({name, email, clerkId}:userProps)=>{
    try {
        await connectToDB();
        const newUser = await User.create({
            name, email, clerkId
        })
        await newUser.save();
        return JSON.parse(JSON.stringify(newUser))
    } catch (error) {
      console.log(error)    
    }
}  