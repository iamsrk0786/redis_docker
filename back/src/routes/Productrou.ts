import { Router } from "express";
import { createProductController, getAllProductsController, getLatestProductsController, getAllProductCategoriesController, getProductController, updateProductController, deleteProductController,  } from "../controller/Productcon";
const app = Router();

app.post('/', createProductController);
app.get('/', getAllProductsController);
app.get('/latest', getLatestProductsController);
app.get('/categories', getAllProductCategoriesController);
app.route('/:id').get(getProductController).put(updateProductController).delete(deleteProductController);

export default app;