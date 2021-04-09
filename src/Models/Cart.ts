import Product from "./Product";
interface QuantifiedProduct {
	product: Product;
	quantity: number;
}
export default class Cart {
	items: QuantifiedProduct[];

	constructor(items: QuantifiedProduct[]) {
		this.items = items;
	}

	static fromJSON(json: object): Cart {
		//TODO
		return Object.assign(new Cart([]), JSON.parse(JSON.stringify(json)));
	}
}
export enum CartError {
	invalidQuantity,
	unavailableProduct, //TODO
	quantityExceedsStock,
	noContextProvider,
}
