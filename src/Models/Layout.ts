import Message from "./Message";
import Body from "./Body";
import Navigation from "./Navigation";

class Layout {
	messages: Message[];
	logo: string;
	navigation: Navigation;
	body: Body;

	constructor(
		messages: Message[],
		logo: string,
		navigation: Navigation,
		body: Body
	) {
		this.messages = messages;
		this.logo = logo;
		this.navigation = navigation;
		this.body = body;
	}

	static fromJSON(json: object): Layout {
		//TODO
		return Object.assign(
			new Layout([], "", new Navigation([], []), new Body("", [], [])),
			JSON.parse(JSON.stringify(json))
		);
	}
}

export default Layout;
