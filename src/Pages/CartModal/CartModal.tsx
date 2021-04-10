import ProductCell from "Components/ProductCell/ProductCell";
import CartContext from "Contexts/CartContext";
import React, { useContext } from "react";
import styles from "./CartModal.module.scss";

function CartModal() {
	const { cart } = useContext(CartContext);

	const productsList = () => {
		return (
			<React.Fragment>
				{cart?.items.map((element) => {
					return (
						<ProductCell
							product={element.product}
							quantity={element.quantity}
						/>
					);
				})}
			</React.Fragment>
		);
	};

	const emptyCart = () => {
		return <div>empty</div>;
	};

	return (
		<React.Fragment>
			{cart?.items.length === 0 ? emptyCart() : productsList()}
		</React.Fragment>
	);
}

export default CartModal;
