export interface Price {
    price: number;
    brand: string;
    discountPercentage: number;
    productId: string;
}

export interface Discount {
    discountPercentage: number;
    brand: string;
}