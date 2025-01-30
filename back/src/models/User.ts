import mongoose from "mongoose";
interface User extends Document{
name: string;
email: string;
password: string;
role: "user" | "admin";
dob: Date;
createdAt: Date;
updatedAt: Date;

}
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a name"],
    },
    email:{
        type: String,
        required: [true, "Please provide an email"],
        unique: true
    },
    password:{
        type: String,
        required: [true, "Please provide a password"],
        minlength: 6,
    },
    role:{
        type: String,
        enum: ["user", "admin"],
        default: "user",
    },
    dob:{
        type: Date,
    }
    }
    ,{
        timestamps: true,
    }

);

export default mongoose.model<User>("User", userSchema);