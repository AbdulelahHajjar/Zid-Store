class Product {
	id: String;
	model: String;
	sku: String;
	quantity: Number;
	stock_status: String;
	image: String;
	price: Number;
	old_price: Number;
	minimum: Number;
	share_link: String;
	updated_at: Object;
	name: String;
	description: String;

	constructor(
		id: String,
		model: String,
		sku: String,
		quantity: Number,
		stock_status: String,
		image: String,
		price: Number,
		old_price: Number,
		minimum: Number,
		share_link: String,
		updated_at: Object,
		name: String,
		description: String
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
}

export default Product;
