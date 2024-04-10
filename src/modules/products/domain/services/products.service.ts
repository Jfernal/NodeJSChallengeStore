import { ProductPersistance } from "../../infraestructure/persistance/products.persistance";

export class ProductService {
    constructor(private _productPersistance: ProductPersistance) {}

    public getProducts() {
        return this._productPersistance.getProducts();
    }
}