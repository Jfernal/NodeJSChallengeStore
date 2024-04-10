import { Discount } from "../../../../common/interfaces/prices.interface";

export interface PricePersistance {
    getPrices(id: string, name:string): Promise<Discount>;
}