import IconButton from "Components/IconButton/IconButton";
import LayoutContext from "Contexts/LayoutContext";
import StoreContext from "Contexts/StoreContext";
import React, { useContext } from "react";
import { Button, FormControl, Nav, Navbar, NavDropdown } from "react-bootstrap";
import storeLogo from "Resources/Images/store-logo.png";
import styles from "./NavigationBar.module.scss";
import cartIcon from "Resources/Images/cart.png";
import CartContext from "Contexts/CartContext";

function NavigationBar() {
	const layout = useContext(LayoutContext);
	const store = useContext(StoreContext);
	const cart = useContext(CartContext);

	return (
		<Navbar collapseOnSelect expand="lg" bg="light" variant="light">
			<Navbar.Brand href="#">
				<img
					alt={store.name}
					src={layout.logo}
					width="64"
					height="64"
					className="d-inline-block align-top"
				/>
			</Navbar.Brand>{" "}
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="mr-auto">
					<IconButton
						icon={cartIcon}
						badgeNumber={cart.numItems()}
						alt={`Shopping Cart (Number of Items: ${cart.numItems()})`}
					/>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}

export default NavigationBar;
