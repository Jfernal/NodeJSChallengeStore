// import express from 'express';
import bodyParser from "body-parser";
import express, { Request, Response, Express } from "express";
import cors from "cors";
import { MongoConnection } from "../common/config/configMongoConnection";
import { ProductRepository } from "./products/infraestructure/repository/products.repository";
import { ProductController } from "./products/app/controllers/products.controller";
import { ProductService } from "./products/domain/services/products.service";
import { productsRoutes } from "./products/app/routes/products.router";
import { PriceRepository } from './prices/infraestructure/repository/prices.repository';
import { PriceController } from "./prices/app/controllers/prices.controller";
import { PriceService } from "./prices/domain/services/price.service";
import { pricesRoutes } from "./prices/app/routes/prices.router";
import { errorHandlerMiddleware } from "../common/middlewares/error.handler.middleware";

const app: Express = express();
export const serverConfig = (): Express => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cors());
  app.use(errorHandlerMiddleware);

  const db = new MongoConnection();
  db.connect().then(() => {
    const productRepository = new ProductRepository();
    const priceRepository = new PriceRepository();
    const httpPortProduct = new ProductController(new ProductService(productRepository));
    const httpPortPrice = new PriceController(new PriceService(priceRepository));
    productsRoutes(app, httpPortProduct);
    pricesRoutes(app, httpPortPrice);
  }).catch((error) => {
    console.log('Error al levantar base de datos');
  });

  app.get("/", (req: Request, res: Response) => {
    res.send("¡El servidor está en funcionamiento!");
  });

  return app;
};