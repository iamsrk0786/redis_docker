import { api } from "./api";


export const register = async(data:any)=>{
    try {
        const response = await api.post("/api/user/", data);
        return response.data;
    } catch (error) {
        return error;
    }
}

export const login = async(data:any)=>{
    try {
        const response = await api.post("/api/user/login", data);
        return response.data;
    } catch (error) {
        return error;
    }
}

export const getUsers = async()=>{
    try {
        const response = await api.get("/");
        return response.data;
    } catch (error) {
        return error;
    }
}

export const getUser = async(id:string)=>{
    try {
        const response = await api.get(`/${id}`);
        return response.data;
    } catch (error) {
        return error;
    }
}

export const updateUser = async(id:string, data:any)=>{
    try {
        const response = await api.put(`/${id}`, data);
        return response.data;
    } catch (error) {
        return error;
    }
}

export const deleteUser = async(id:string)=>{
    try {
        const response = await api.delete(`/${id}`);
        return response.data;
    } catch (error) {
        return error;   
    }
}