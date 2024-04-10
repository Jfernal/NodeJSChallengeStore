import mongoose from 'mongoose';
import { Discount } from '../../../../common/interfaces/prices.interface';
import PriceModel from '../../domain/models/prices.schema';
import { PricePersistance } from '../persistance/prices.persistance';
import ProductModel from '../../../products/domain/models/products.schema';

export class PriceRepository implements PricePersistance{
    async getPrices(id:string, name:string): Promise<Discount> {
        try {
            const product = await ProductModel.findOne({name, stock: {$gt: 0}});
            const tempProduct = product ?? {brand: '', price: 0};
            if (tempProduct.price === 0 &&  tempProduct.brand === '') {
                throw new Error('No existe el producto');
            }
            const price = await PriceModel.findOne({clientId: new mongoose.Types.ObjectId(id)})
            .populate({ path: 'productId', match: { name,  stock: {$gt: 0}} })
            .exec();
            const discount: Discount = {
                brand: tempProduct.brand,
                discountPercentage: tempProduct.price - ((tempProduct.price * (price ? price.discountPercentage : 0)) / 100)
            }
            return discount;
        } catch (error) {
            console.log(error);
            throw new Error('error');
        }
    }
}