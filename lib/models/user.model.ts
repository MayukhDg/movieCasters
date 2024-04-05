import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name: { type: String, required:true },
    email: { type: String, required: true },
    image:{type:String},
    createdAuditions:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Audition",
 }],


})


const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;