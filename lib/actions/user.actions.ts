import User from "../models/user.model"; 
import { connectToDB } from "../mongoose";


interface userProps {
  name:string,
  email:string,
  
}


export const createNewUser = async({name, email}:userProps)=>{
    try {
        await connectToDB();
        const newUser = await User.create({
            name, email
        })
        await newUser.save();
        return JSON.parse(JSON.stringify(newUser))
    } catch (error) {
      console.log(error)    
    }
}  