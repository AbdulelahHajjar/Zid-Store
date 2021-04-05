import Product from "./Product";
class Body {
	cover_image: string;
	hot_products: Product[];
	recent_products: Product[];

	constructor(
		cover_image: string,
		hot_products: Product[],
		recent_products: Product[]
	) {
		this.cover_image = cover_image;
		this.hot_products = hot_products;
		this.recent_products = recent_products;
	}
}

export default Body;
