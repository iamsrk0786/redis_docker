import { Request, Response } from "express";
import { createProduct, getAllProducts, getLatestProducts, getAllProductCategories, getProduct, updateProduct, deleteProduct } from "../services/Productsss";

export const createProductController = async (req: Request, res: Response) => {
    try {
        const product = await createProduct(req.body);
        res.status(201).json(product);
        
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
}
export const getAllProductsController = async (req: Request, res: Response) => {
    try {
        const products = await getAllProducts();
        res.status(200).json(products);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
}
export const getLatestProductsController = async (req: Request, res: Response) => {
    try {
        const products = await getLatestProducts();
        res.status(200).json(products);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
}
export const getAllProductCategoriesController = async (req: Request, res: Response) => {
    try {
        const categories = await getAllProductCategories();
        res.status(200).json(categories);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
}
export const getProductController = async (req: Request, res: Response) => {
    try {
        const product = await getProduct(req.params.id);
        res.status(200).json(product);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
}
export const updateProductController = async (req: Request, res: Response) => {
    try {
        const product = await updateProduct(req.params.id, req.body);
        res.status(200).json(product);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
}
export const deleteProductController = async (req: Request, res: Response) => {
    try {
        await deleteProduct(req.params.id);
        res.status(204).json();
    }
    catch (error: any) {
        res.status(400).json({ message: error.message });
    }
}