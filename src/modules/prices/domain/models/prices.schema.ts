import mongoose, { Schema, Types } from 'mongoose';
import { Price } from '../../../../common/interfaces/prices.interface';


const PriceSchema = new mongoose.Schema<Price>({
    brand: {type: String, required: true},
    price: {type: Number, required: true},
    discountPercentage: {type: Number, required: true},
    productId: [{ type: Schema.Types.ObjectId, ref: 'products' }]
    //productId: Schema.Types.ObjectId
});

const PriceModel = mongoose.model<Price>('prices', PriceSchema);

export default PriceModel;