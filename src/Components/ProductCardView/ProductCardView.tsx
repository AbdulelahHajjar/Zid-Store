import Product from "Models/Product";
import styles from "./ProductCardView.module.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import StoreContext from "Contexts/StoreContext";

type ProductCardViewProps = {
	product: Product;
};

function ProductCardView({ product }: ProductCardViewProps) {
	const store = useContext(StoreContext);

	return (
		<div style={{ display: "inline-block" }}>
			<Link
				className={`${styles.container} link`}
				to={{
					pathname: `/product/${product.id}`,
					state: { product },
				}}
			>
				<div>
					<img
						className={styles.image}
						src={product.image}
						alt="Product"
					/>

					<div className={styles.details}>
						<div>
							<div
								className={`${styles.title} ${styles.truncated}`}
							>
								{product.name}
							</div>
							<div className={`${styles.subtitle}`}>Subtitle</div>
						</div>
						<div className={styles.price_details_container}>
							<div className={styles.price_details}>
								{product.old_price && (
									<div className={styles.old_price}>
										{product.old_price} {store.currency}
									</div>
								)}

								<div className={styles.price}>
									{product.price} {store.currency}
								</div>
							</div>
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
}

export default ProductCardView;
