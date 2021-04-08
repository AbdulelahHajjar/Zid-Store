import Category from "./Category";
import Action from "./Action";

class Navigation {
	categories: Category[]; //under navigation bar + categories page
	actions: Action[]; //trailing side of logo in navigation bar

	constructor(categories: Category[], actions: Action[]) {
		this.categories = categories;
		this.actions = actions;
	}
}

export default Navigation;
