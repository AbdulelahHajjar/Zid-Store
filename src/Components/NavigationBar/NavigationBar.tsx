import IconButton from "Components/IconButton/IconButton";
import LayoutContext from "Contexts/LayoutContext";
import StoreContext from "Contexts/StoreContext";
import { useContext, useState } from "react";
import { Modal, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "Components/Button/CustomButton";
import styles from "./NavigationBar.module.scss";
import cartIcon from "Resources/Images/cart.png";
import CartContext from "Contexts/CartContext";
import logo from "Resources/Images/logo.png";
import CartModal from "Pages/CartModal/CartModal";

function NavigationBar() {
	const layout = useContext(LayoutContext);
	const store = useContext(StoreContext);
	const { cart, numItems } = useContext(CartContext);
	const [showCart, setShowCart] = useState(false);

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
			<Nav.Item>
				{layout.navigation.actions.map((action, index) => {
					return (
						<Link to={{ pathname: action.value }} key={index}>
							<Button>{action.text}</Button>
						</Link>
					);
				})}
			</Nav.Item>
		);
	};

	const shoppingCart = () => {
		return (
			<Nav.Item>
				<IconButton
					icon={cartIcon}
					badgeNumber={numItems()!} //TODO
					alt={`Shopping Cart (Number of Items: ${numItems()!})`} //TODO
					onClick={() => setShowCart(true)}
				/>
			</Nav.Item>
		);
	};

	return (
		<div className={styles.container}>
			<Navbar
				collapseOnSelect
				expand="sm"
				variant="light"
				className={styles.navigation_bar}
			>
				{brand()}
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className={`${styles.actions_container}`}>
						{actions()}
						{shoppingCart()}
					</Nav>
				</Navbar.Collapse>
			</Navbar>
			<Link className={styles.store_name} to="/">
				<p>{store.name}</p>
			</Link>
			<Modal
				size="lg"
				show={showCart}
				onHide={() => setShowCart(false)}
				aria-labelledby="example-modal-sizes-title-lg"
			>
				<Modal.Header closeButton>
					<Modal.Title id="example-modal-sizes-title-lg">
						السلة
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<CartModal />
				</Modal.Body>
			</Modal>
		</div>
	);
}

export default NavigationBar;
