import { Request, Response } from "express";
import { ProductService } from "../../domain/services/products.service"

export class ProductController {
    constructor(private _productService: ProductService) {}

    public async getProducts(req: Request, res: Response) {
        try {
            res.json(await this._productService.getProducts());
        } catch (error) {
            throw new Error("Error al consultar productos");
        }
    }
}