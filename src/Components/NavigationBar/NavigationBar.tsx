import IconButton from "Components/IconButton/IconButton";
import LayoutContext from "Contexts/LayoutContext";
import StoreContext from "Contexts/StoreContext";
import { useContext } from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import styles from "./NavigationBar.module.scss";
import cartIcon from "Resources/Images/cart.png";
import CartContext from "Contexts/CartContext";
import CategoriesBar from "Components/CategoriesBar/CategoriesBar";

function NavigationBar() {
	const layout = useContext(LayoutContext);
	const store = useContext(StoreContext);
	const cart = useContext(CartContext);

	const brand = () => {
		return (
			<Navbar.Brand href="#">
				<Link to="/">
					<img
						alt={store.name}
						src={layout.logo}
						height="56"
						className="d-inline-block align-top"
					/>
				</Link>
			</Navbar.Brand>
		);
	};

	const actions = () => {
		return (
			<Nav.Link>
				{layout.navigation.actions.map((action) => {
					return (
						<Link to={{ pathname: action.value }}>
							<Button>{action.text}</Button>
						</Link>
					);
				})}
			</Nav.Link>
		);
	};

	const shoppingCart = () => {
		return (
			<Nav.Link>
				<Link to={"/cart"}>
					<IconButton
						icon={cartIcon}
						badgeNumber={cart.numItems()}
						alt={`Shopping Cart (Number of Items: ${cart.numItems()})`}
					/>
				</Link>
			</Nav.Link>
		);
	};

	return (
		<Navbar
			collapseOnSelect
			expand="sm"
			variant="light"
			className={styles.navigation_bar}
		>
			{brand()}

			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className={`mr-auto ${styles.actions_container}`}>
					{actions()}
					{shoppingCart()}
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}

export default NavigationBar;
