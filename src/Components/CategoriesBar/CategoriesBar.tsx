import LayoutContext from "Contexts/LayoutContext";
import { useContext } from "react";
import { Nav, Navbar } from "react-bootstrap";
import styles from "./CategoriesBar.module.scss";

function CategoriesBar() {
	const layout = useContext(LayoutContext);

	const categories = () => {
		return layout.navigation.categories.map((category, index) => {
			return (
				<Nav.Item as="li" key={index}>
					<Nav.Link
						className={styles.category}
						href={category.link}
						key={index}
					>
						{category.name}
					</Nav.Link>
				</Nav.Item>
			);
		});
	};

	return (
		<div className={styles.categories_bar}>
			<Nav as="ul">{categories()}</Nav>
		</div>
	);
}

export default CategoriesBar;
