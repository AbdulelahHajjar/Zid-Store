import Category from "./Category";
import Action from "./Action";

class Navigation {
	categories: Category[];
	actions: Action[];

	constructor(categories: Category[], actions: Action[]) {
		this.categories = categories;
		this.actions = actions;
	}
}

export default Navigation;
