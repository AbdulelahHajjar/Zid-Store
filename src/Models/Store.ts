class Store {
	id: string;
	name: string;
	ssl: string;
	currency: string;
	language_code: string;

	constructor(
		id: string,
		name: string,
		ssl: string,
		currency: string,
		language_code: string
	) {
		this.id = id;
		this.name = name;
		this.ssl = ssl;
		this.currency = currency;
		this.language_code = language_code;
	}
}

export default Store;
