import type { Producttype } from "../../app/services/products/product.types";


export interface CartItem extends Producttype {
  quantity: number;
}