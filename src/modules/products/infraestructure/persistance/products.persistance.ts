import { Product } from "../../../../common/interfaces/products.interface";

export interface ProductPersistance {
    getProducts(): Promise<Product[]>;
}