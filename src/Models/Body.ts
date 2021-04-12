import Product from "./Product";
import Section from "./Section";
class Body {
	cover_image: string;
	all_products: Product[];
	sections: Section[];

	constructor(
		cover_image: string,
		all_products: Product[],
		sections: Section[]
	) {
		this.cover_image = cover_image;
		this.all_products = all_products;
		this.sections = sections;
	}
}

export default Body;
