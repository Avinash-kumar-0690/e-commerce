// app/store/cartTypes.ts
import type { Producttype } from "../../app/services/ProductClient";

export interface CartItem extends Producttype {
  quantity: number;
}