import NumberStepper from "Components/NumberStepper/NumberStepper";
import CartContext from "Contexts/CartContext";
import StoreContext from "Contexts/StoreContext";
import Product from "Models/Product";
import { useContext } from "react";
import styles from "./ProductCell.module.scss";
import deleteIcon from "Resources/Images/delete.svg";

type ProductCellPropTypes = {
	product: Product;
	quantity: number;
};

function ProductCell({ product, quantity }: ProductCellPropTypes) {
	const store = useContext(StoreContext);
	const { updateQuantity, deleteProduct } = useContext(CartContext);

	const detailsContainer = () => {
		return (
			<div className={styles.details_container}>
				<span className={styles.name}>{product.name}</span>
				{priceContainer()}
			</div>
		);
	};

	const imageContainer = () => {
		return (
			<div className={styles.image_container}>
				<img
					className={styles.image}
					src={product.image}
					alt={product.name}
				/>

				<div className={styles.badge_container}>
					<p className={styles.badge}>{quantity}</p>
				</div>
			</div>
		);
	};

	const priceContainer = () => {
		return (
			<div className={styles.price_container}>
				<div>
					{product.old_price && (
						<span className={styles.product_old_price}>
							{product.old_price} {store.currency}
						</span>
					)}
				</div>
				<div>
					<span className={styles.product_price}>
						{product.price} {store.currency}
					</span>
				</div>
			</div>
		);
	};

	return (
		<div>
			<div className={styles.container}>
				<div className={styles.horizontal_flex_container}>
					{imageContainer()}
					{detailsContainer()}
				</div>

				<div className={styles.horizontal_flex_container}>
					<NumberStepper
						initialValue={quantity}
						min={product.minimum}
						max={product.quantity}
						onUpdate={(newQuantity) => {
							updateQuantity(product, newQuantity);
						}}
					/>
					<button
						className={styles.delete_button}
						onClick={() => deleteProduct(product.id)}
					>
						<img
							className={styles.delete_icon}
							src={deleteIcon}
							alt={`${product.name}`}
						/>
					</button>
				</div>
			</div>
			<div className={styles.spacer}></div>
		</div>
	);
}

export default ProductCell;
