import User from "../models/User";
import  Jwt  from "jsonwebtoken";
import bcrypt from "bcrypt";
import { redis } from "../app";

export const createUser = async (data: any) => {
  try {
    const user = await User.findOne({email:data.email});
    if (user) {
      throw new Error("User already exists");
    }
    const hashedPassword = await bcrypt.hash(data.password, 10);
    data.password = hashedPassword;
    data.dob = Date.now();
    return await User.create(data);
  } catch (error:any) {
    throw new Error(error);
  }
};
export const loginUser = async (data: any) => {
  try {
    const user = await User.findOne({ email: data.email });
    if (!user) {
      throw new Error("User not found");
    }
    const isValid = await bcrypt.compare(data.password, user.password);
    if (!isValid) {
      throw new Error("Invalid credentials");
    }
    const token = Jwt.sign({ id: user._id }, process.env.JWT_SECRET!);
    return { token };
    } catch (error:any) {
        throw new Error(error);
        }
    }


export const getAllUsers = async () => {
    try {
        let user;
        user = await redis.get("users");
        if (user) {
            return JSON.parse(user);
        }
         user =  await User.find();
            await redis.setex("users", 60, JSON.stringify(user));
            return user;
    } catch (error:any) {
        throw new Error(error);
    }
    };
    export const getUser = async (id: string) => {
        try {
            let usere;
            usere = await redis.get(id);
            if (usere) {
                return JSON.parse(usere);
            }
            const user = await User.findById(id);
            if (!user) {
                throw new Error("User not found");
            }
            usere = await User.findById(id);
            await redis.setex(id, 60, JSON.stringify(usere));
            return usere;
        } catch (error:any) {
            throw new Error(error);
        }
    };
    export const updateUser = async (id: string, data: any) => {
        try {
            const user = await User.findById(id);
            if (!user) {
                throw new Error("User not found");
            }
            return await User.findByIdAndUpdate(id, data, { new: true });
        }
        catch (error:any) {
            throw new Error(error);
        }
    };
    export const deleteUser = async (id: string) => {
        try {
            const user = await User.findById(id);
            if (!user) {
                throw new Error("User not found");
            }
            return await User.findByIdAndDelete(id);
        }
        catch (error:any) {
            throw new Error(error);
        }   
    }