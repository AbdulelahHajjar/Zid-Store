class Message {
	text: string;
	text_color: string;
	background_color: string;

	constructor(text: string, text_color: string, background_color: string) {
		this.text = text;
		this.text_color = text_color;
		this.background_color = background_color;
	}
}

export default Message;
