import { api } from "./api";



export const getProducts = async()=>{
    try {
        const response = await api.get("/");
        return response.data;
    } catch (error) {
        return error;
    }
}

export const getProduct = async(id:string)=>{
    try {
        const response = await api.get(`/${id}`);
        return response.data;
    } catch (error) {
        return error;
    }
}

export const updateProduct = async(id:string, data:any)=>{
    try {
        const response = await api.put(`/${id}`, data);
        return response.data;
    } catch (error) {
        return error;
    }
}

export const deleteProduct = async(id:string)=>{
    try {
        const response = await api.delete(`/${id}`);
        return response.data;
    } catch (error) {
        return error;   
    }
}

export const getLatestProducts = async()=>{
    try {
        const response = await api.get("/latest");
        return response.data;
    } catch (error) {
        return error;
    }
}

export const getCategories = async()=>{
    try {
        const response = await api.get("/categories");
        return response.data;
    } catch (error) {
        return error;
    }
}

export const createProduct = async(data:any)=>{
    try {
        const response = await api.post("/", data);
        return response.data;
    } catch (error) {
        return error
    }
}