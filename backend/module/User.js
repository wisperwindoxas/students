import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
    first_name: {type:String, require:true},
    last_name:{type:String, require:true},
    age:{type:String, require:true},
    phone:{type:String, require:true},
    region:{type:String, require:true},
    status:{type:String, require:true},
    gender:{type:String, require:true},
    course:{type:String, require:true}
    
}, 
{timestamps:true}
)

const User = mongoose.model("students", UserSchema)

export default User