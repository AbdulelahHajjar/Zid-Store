class Action {
	type: string;
	text: string;
	value: string;

	constructor(type: string, text: string, value: string) {
		this.type = type;
		this.text = text;
		this.value = value;
	}
}

export default Action;
