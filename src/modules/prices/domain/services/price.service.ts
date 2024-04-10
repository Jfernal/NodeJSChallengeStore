import { PricePersistance } from "../../infraestructure/persistance/prices.persistance";

export class PriceService {
    constructor(private _pricePersistance: PricePersistance) {}

    public getPrices(id: string, name: string) {
        return this._pricePersistance.getPrices(id, name);
    }
}