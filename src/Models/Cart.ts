import Product from "./Product";

class Cart {
	items: Product[];

	constructor(items: Product[]) {
		this.items = items;
	}

	static fromJSON(json: object): Cart {
		//TODO
		return Object.assign(new Cart([]), JSON.parse(JSON.stringify(json)));
	}

	public numItems(): number {
		return this.items.length;
	}
}

export default Cart;
