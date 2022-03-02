import { CartItem } from '../classes/intefaces/cart-item';

export class Product implements CartItem {
  constructor(public name: string, public price: number) {}
}
