class Product {
	id: number;
	model: string;
	sku: string;
	quantity: number;
	stock_status: string;
	image: string;
	price: number;
	old_price: number | null;
	minimum: number;
	share_link: string;
	updated_at: Object;
	name: string;
	description: string;

	constructor(
		id: number,
		model: string,
		sku: string,
		quantity: number,
		stock_status: string,
		image: string,
		price: number,
		minimum: number,
		share_link: string,
		updated_at: Object,
		name: string,
		description: string,
		old_price: number
	) {
		this.id = id;
		this.model = model;
		this.sku = sku;
		this.quantity = quantity;
		this.stock_status = stock_status;
		this.image = image;
		this.price = price;
		this.old_price = old_price;
		this.minimum = minimum;
		this.share_link = share_link;
		this.updated_at = updated_at;
		this.name = name;
		this.description = description;
	}

	public discountPercentage(): number | null {
		if (this.old_price == null || this.old_price === 0) return null;
		return Math.round(
			((this.old_price - this.price) / this.old_price) * 100
		);
	}
}

export default Product;
