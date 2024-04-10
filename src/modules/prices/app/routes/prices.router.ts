import express, { Router } from 'express';
import { PriceController } from '../controllers/prices.controller';

export function pricesRoutes(
    app: express.Application,
    priceController: PriceController,
) {
    const router = Router();
    router.get(
        "/price/:id/:name",
        priceController.getPrices.bind(priceController)
    );

    app.use("/api/v1", router);
}