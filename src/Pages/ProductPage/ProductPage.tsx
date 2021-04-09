import React, { useContext, useEffect, useState } from "react";
import styles from "./ProductPage.module.scss";
import { useParams, useHistory } from "react-router-dom";
import LayoutContext from "Contexts/LayoutContext";
import Product from "Models/Product";

function ProductPage(props) {
	let { id } = useParams();

	const layout = useContext(LayoutContext);
	const [product, setProduct] = useState<Product | null>(null);

	useEffect(() => {
		if (!id || id.trim() === "") return;

		var fetchedProduct = props.location.state?.product;
		if (!fetchedProduct) {
			fetchedProduct = layout.body.hot_products
				.concat(layout.body.recent_products)
				.find((element) => {
					return "" + element.id === id;
				});
		}

		if (!fetchedProduct) return;

		setProduct(fetchedProduct);
	}, [layout.body, id, props.location.state?.product]);

	const productDetails = () => {
		if (!product) return;
		return (
			<div>
				<p>{product.id}</p>
				<p>{product.model}</p>
				<p>{product.sku}</p>
				<p>{product.quantity}</p>
				<p>{product.stock_status}</p>
				<p>{product.image}</p>
				<p>{product.price}</p>
				<p>{product.old_price}</p>
				<p>{product.minimum}</p>
				<p>{product.share_link}</p>
				<p>{product.name}</p>
				<p>{product.description}</p>
			</div>
		);
	};

	const notFound = () => {
		return <p>Not Found.</p>;
	};

	return (
		<React.Fragment>
			{product ? productDetails() : notFound()}
		</React.Fragment>
	);
}

export default ProductPage;
