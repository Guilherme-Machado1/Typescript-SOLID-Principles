type CartItem = { name: string; price: number };

export class ShoppingCart {
  private readonly _items: CartItem[] = [];
  private orderStatus: 'Open' | 'Closed' = 'Open';

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  total(): number {
    return +this._items
      .reduce((total, next) => total + next.price, 0)
      .toFixed(2);
  }

  checkout(): void {
    if (this.isEmpty()) {
      console.log('Your shopping cart is empty');
      return;
    }

    this.orderStatus = 'Closed';
    this.sendMessage(`Your order totaled ${this.total()}, was receveid`);
    this.saveOrder();
    this.clear();
    console.log(this.orderStatus);
  }

  sendMessage(msg: string): void {
    console.log('Message Sent: ', msg);
  }

  clear(): void {
    console.log('Shopping Cart is clear');
    this._items.length = 0;
  }

  saveOrder(): void {
    console.log('Order noted');
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }
}

const shoppingCart = new ShoppingCart();
shoppingCart.addItem({ name: 'SSD', price: 249.9 });
shoppingCart.addItem({ name: 'Placa de Video', price: 1500 });
shoppingCart.addItem({ name: 'HD', price: 179.9 });

console.log(shoppingCart.items);
console.log(shoppingCart.total());
shoppingCart.checkout();
