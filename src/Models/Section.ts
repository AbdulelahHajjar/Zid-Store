class Section {
	emoji: string;
	title: string;
	product_ids: number[];

	constructor(emoji: string, title: string, product_ids: number[]) {
		this.emoji = emoji;
		this.title = title;
		this.product_ids = product_ids;
	}
}

export default Section;
