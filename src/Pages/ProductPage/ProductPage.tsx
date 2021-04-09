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

	return <div>{product?.name}</div>;
}

export default ProductPage;
