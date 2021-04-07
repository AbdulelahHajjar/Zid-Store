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

	public readingDirectionCssClass(): string {
		return this.language_code === "ar" ? "rtl" : "ltr";
	}

	public toggleLanguage() {
		this.language_code = this.language_code === "ar" ? "en" : "ar";
	}
}

export default Store;
