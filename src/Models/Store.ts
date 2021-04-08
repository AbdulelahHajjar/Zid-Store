class Store {
	id: string;
	name: string; //tab title
	ssl: string;
	currency: string; //product card
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

	static fromJSON(json: object): Store {
		//TODO
		return Object.assign(
			new Store("", "", "", "", ""),
			JSON.parse(JSON.stringify(json))
		);
	}

	public htmlDirAttribute(): string {
		return this.language_code === "ar" ? "rtl" : "ltr";
	}
}

export default Store;
