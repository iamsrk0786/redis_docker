import Product from "../models/Product";
import { redis } from "../app";
// import { IProduct } from "../types";

export const createProduct = async (data: any) => {
    try {
        return await Product.create(data);
    } catch (error:any) {
        throw new Error(error);
    }
    };
    export const getAllProducts = async () => {
        try {
            let products 
          products = await redis.get("products");
            if (products) {
                return JSON.parse(products);
            }
            products = await Product.find();
            await redis.setex("products", 60, JSON.stringify(products));
            return products;
             
        } catch (error:any) {
            throw new Error(error);
        }
        };
        export const getLatestProducts = async () => {
            try {
                let latestProducts;
                latestProducts = await redis.get("latestProducts");
                if (latestProducts) {
                    return JSON.parse(latestProducts);
                }
                latestProducts =  await Product.find().sort({ createdAt: -1 }).limit(5);
                await redis.setex("latestProducts", 60, JSON.stringify(latestProducts));
                return latestProducts;
            } catch (error:any) {
                throw new Error(error);
            }
            };
            export const getAllProductCategories = async () => {
                try {
                    let categories;
                    categories = await redis.get("categories");
                    if (categories) {
                        return JSON.parse(categories);
                    }
                    categories = await Product.distinct("category");
                    await redis.setex("categories", 60, JSON.stringify(categories));
                    return categories;
                } catch (error:any) {
                    throw new Error(error);
                }
                
                }
        
        export const getProduct = async (id: string) => {
            try {
                let producte;
                producte = await redis.get(id);
                if (producte) {
                    return JSON.parse(producte);
                }
                const product = await Product.findById(id);
                if (!product) {
                    throw new Error("Product not found");
                }
                 producte = await Product.findById(id);
                await redis.setex(id, 60, JSON.stringify(producte));
                return producte;
            } catch (error:any) {
                throw new Error(error);
            }
        };
        export const updateProduct = async (id: string, data: any) => {
            try {
                const product = await Product.findById(id);
                if (!product) {
                    throw new Error("Product not found");
                }
                return await Product.findByIdAndUpdate(id, data, { new: true });
            }
            catch (error:any) {
                throw new Error(error);
            }
        };
        export const deleteProduct = async (id: string) => {
            try {
                const product = await Product.findById(id);
                if (!product) {
                    throw new Error("Product not found");
                }
                return await Product.findByIdAndDelete(id);
            }
            catch (error:any) {
                throw new Error(error);
            }   
        }
