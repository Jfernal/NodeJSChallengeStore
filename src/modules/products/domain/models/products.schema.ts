import mongoose from 'mongoose';
import { Product } from '../../../../common/interfaces/products.interface';

const ProductSchema = new mongoose.Schema<Product>({
    name: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    stock: {type: Number, required: true},
    category: {type: String, required: true},
    brand: {type: String, required: true},
    imageUrl: {type: String, required: true}
});

const ProductModel = mongoose.model<Product>('products', ProductSchema);

export default ProductModel;