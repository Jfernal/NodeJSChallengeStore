import express, { Router } from 'express';
import { ProductController } from '../controllers/products.controller';

export function productsRoutes(
    app: express.Application,
    productController: ProductController,
) {
    const router = Router();
    router.get(
        "/products",
        productController.getProducts.bind(productController)
    );

    app.use("/api/v1", router);
}