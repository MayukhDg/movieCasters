import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import User from "@/lib/models/user.model"
import { updateUser } from "@/lib/actions/user.actions"

const handler =  NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID || "",
      clientSecret: process.env.GOOGLE_SECRET || "",
    }),
  ],

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      try {
         await updateUser({
          userName:profile?.name as string,
          email: profile?.email as string,
          image: profile?.image as string

         })
         return true
      } catch (error:any) {
        console.log("Error checking if user exists: ", error.message);
        return false;
      }
    },
    async session({ session, token, user }) {
      const sessionUser = await User.findOne({ email: session?.user?.email });
      const newSession = {
        ...session, 
        user:{
         ...session?.user,
         id: sessionUser._id.toString()  
        }
        
      } 
      return newSession
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      return token
    }
  }
})


export { handler as GET, handler as POST }