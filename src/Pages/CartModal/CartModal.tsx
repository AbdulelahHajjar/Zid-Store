import CustomButton from "Components/Button/CustomButton";
import ProductCell from "Components/ProductCell/ProductCell";
import CartContext from "Contexts/CartContext";
import StoreContext from "Contexts/StoreContext";
import React, { useContext } from "react";
import styles from "./CartModal.module.scss";

function CartModal() {
	const { cart, totalPrice } = useContext(CartContext);
	const store = useContext(StoreContext);

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

				<div className={styles.summary_container}>
					<span className={styles.summary}>
						المجموع: {totalPrice()} {store.currency}
					</span>
					<CustomButton>إتمام الدفع</CustomButton>
				</div>
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
