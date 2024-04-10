import { Request, Response } from "express";
import { PriceService } from "../../domain/services/price.service";

export class PriceController {
    constructor(private _priceService: PriceService) {}

    public async getPrices(req: Request, res: Response) {
        const {id, name} = req.params;
        try {
            res.json(await this._priceService.getPrices(id, name));
        } catch (error) {
            throw new Error("Error al consultar precios");
        }
    }
}