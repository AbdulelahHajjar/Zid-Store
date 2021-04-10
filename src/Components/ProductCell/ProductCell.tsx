import { Link } from "@material-ui/core";
import StoreContext from "Contexts/StoreContext";
import { QuantifiedProduct } from "Models/Cart";
import Product from "Models/Product";
import { useContext } from "react";
import styles from "./ProductCell.module.scss";

type ProductCellPropTypes = {
	product: Product;
	quantity: number;
};

function ProductCell({ product, quantity }: ProductCellPropTypes) {
	const store = useContext(StoreContext);

	return (
		<div>
			<div className={styles.container}>
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

				<div className={styles.details_container}>
					<span className={styles.name}>{product.name}</span>

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
				</div>
			</div>
			<div className={styles.spacer}></div>
		</div>
	);
}

export default ProductCell;
