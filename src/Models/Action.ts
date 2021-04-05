class Action {
	type: String;
	text: String;
	value: String;

	constructor(type: String, text: String, value: String) {
		this.type = type;
		this.text = text;
		this.value = value;
	}
}

export default Action;
