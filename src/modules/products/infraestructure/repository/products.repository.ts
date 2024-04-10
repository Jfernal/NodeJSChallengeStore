import { Product } from '../../../../common/interfaces/products.interface';
import ProductModel from '../../domain/models/products.schema';
import { ProductPersistance } from '../persistance/products.persistance';

export class ProductRepository implements ProductPersistance{
    getProducts(): Promise<Product[]> {
        return ProductModel.find({stock: {$gt: 0}});
    }
}