import React from "react";
import Product from "Models/Product";
import productImage from "Resources/Images/product-image.jpeg";
import styles from "./ProductCardView.module.scss";
import { Link } from "react-router-dom";

type ProductCardViewProps = {
	product: Product;
};

function ProductCardView({ product }: ProductCardViewProps) {
	return (
		<Link className={"link"} to={"/product"}>
			<div className={styles.container}>
				<img
					className={styles.image}
					src={productImage}
					alt="Product Title"
				/>
				<div className={styles.details}>
					<div>
						<p className={`${styles.title} ${styles.truncated}`}>
							Title
						</p>
						<p className={`${styles.subtitle}`}>Subtitle</p>
					</div>
					<div className={styles.price_details}>
						{product.old_price && (
							<p className={styles.old_price}>3500 S.R.</p>
						)}

						<p className={styles.price}>2000 S.R.</p>
					</div>
				</div>
			</div>
		</Link>
	);
}

export default ProductCardView;
