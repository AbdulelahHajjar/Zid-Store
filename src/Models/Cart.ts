import Product from "./Product";

class Cart {
	items: Product[];

	constructor(items: Product[]) {
		this.items = items;
	}
}

export default Cart;
