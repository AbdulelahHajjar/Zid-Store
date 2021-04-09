import React from "react";
import Product from "Models/Product";
import styles from "./ProductCardView.module.scss";
import { Link } from "react-router-dom";
import data from "Resources/Data/data.json";
type ProductCardViewProps = {
	product: Product;
};

function ProductCardView({ product }: ProductCardViewProps) {
	return (
		<div style={{ display: "inline-block" }}>
			<Link
				className={`${styles.container} link`}
				to={{ pathname: `/product/${product.id}`, state: product }}
			>
				<div>
					<img
						className={styles.image}
						src={product.image}
						alt="Product"
					/>

					<div className={styles.details}>
						<div>
							<p
								className={`${styles.title} ${styles.truncated}`}
							>
								{product.name}
							</p>
							<p className={`${styles.subtitle}`}>Subtitle</p>
						</div>
						<div className={styles.price_details}>
							{product.old_price && (
								<p className={styles.old_price}>
									{product.old_price}
								</p>
							)}

							<p className={styles.price}>
								{product.price} {data.store.currency}
							</p>
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
}

export default ProductCardView;
