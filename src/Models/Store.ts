class Store {
	id: String;
	name: String;
	ssl: String;
	currency: String;
	language_code: String;

	constructor(
		id: String,
		name: String,
		ssl: String,
		currency: String,
		language_code: String
	) {
		this.id = id;
		this.name = name;
		this.ssl = ssl;
		this.currency = currency;
		this.language_code = language_code;
	}
}

export default Store;
