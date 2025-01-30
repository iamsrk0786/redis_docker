import mongoose from "mongoose";
interface Product extends Document{
name: string;
description: string;
price: number;
stock: number;
image: string;
createdAt: Date;
updatedAt: Date;
}

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a name"],
    },
    description:{
        type: String,
        required: [true, "Please provide a description"],
    },
    price:{
        type: Number,
        required: [true, "Please provide a price"],
    },
    stock:{
        type: Number,
        required: [true, "Please provide a stock"],
    },
    category:{
        type: String,
        required: [true, "Please provide a category"],
        trim : true,
    },
    image:{
        type: String,
        required: [true, "Please provide an image"],
    }
    }
    ,{
        timestamps: true,
    }

);

export default mongoose.model<Product>("Product", productSchema);