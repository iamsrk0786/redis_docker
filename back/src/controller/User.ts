import { createUser, getAllUsers, getUser, updateUser, deleteUser, loginUser } from "../services/User";
import { Request, Response } from "express";


const createUserController = async (req:Request , res:Response ) => {
    try {
        const user = await createUser( req.body);
        res.status(201).json({user, message: "User created successfully"});
    } catch (error:any) {
        res.status(400).json({ message: error.message });
    }
}
const loginUserController = async (req: Request, res: Response) => {
    try {
        const { email, password} = req.body;
        if (!email || !password) {
            throw new Error("Email and password are required");
        }
        const user = await loginUser(req.body);
        res.status(200).json({user, message: "User logged in successfully"});
    } catch (error:any) {
        res.status(400).json({ message: error.message });
    }
}

const getAllUsersController = async (req: Request, res: Response ) => {
    try {
        const users = await getAllUsers();
        res.status(200).json(users);
    } catch (error:any) {
        res.status(400).json({ message: error.message });
    }
}

const getUserController = async (req: Request, res: Response) => {
    try {
        const user = await getUser(req.params.id);
        res.status(200).json(user);
    } catch (error:any) {
        res.status(400).json({ message: error.message });
    }        
}

const updateUserController = async (req: Request, res: Response) => {
    try {
        const user = await updateUser(req.params.id, req.body);
        res.status(200).json(user);
    } catch (error:any) {
        res.status(400).json({ message: error.message });
    }                                                                        
}
const deleteUserController = async (req: Request, res: Response) => {
    try {
        await deleteUser(req.params.id);
        res.status(204).json();
    }
    catch (error:any) {
        res.status(400).json({ message: error.message });
    }
}
export { createUserController,loginUserController, getAllUsersController, getUserController, updateUserController, deleteUserController };
