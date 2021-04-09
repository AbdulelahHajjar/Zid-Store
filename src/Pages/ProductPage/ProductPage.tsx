import React, { useContext, useEffect, useState } from "react";
import styles from "./ProductPage.module.scss";
import { useParams } from "react-router-dom";
import LayoutContext from "Contexts/LayoutContext";
import Product from "Models/Product";
import CartContext from "Contexts/CartContext";
import { Col, Container, Row } from "react-bootstrap";
import Spacer from "Components/Spacer/Spacer";
import StoreContext from "Contexts/StoreContext";

function ProductPage(props) {
	let { id } = useParams();

	const layout = useContext(LayoutContext);
	const cartContext = useContext(CartContext);
	const store = useContext(StoreContext);

	const [product, setProduct] = useState<Product | null>(null);

	useEffect(() => {
		if (!id || id.trim() === "") return;

		var fetchedProduct: Product | undefined = props.location.state?.product;
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
		console.log(product);
		return (
			<Container fluid>
				<Row>
					<Spacer height={72} />
				</Row>
				<Row className={styles.product_details_row}>
					<Col lg={2} md={1} />
					<Col lg={3} md={4} className={styles.product_image_column}>
						<img
							src={product.image}
							alt={product.name}
							className={styles.product_image}
						/>
					</Col>
					<Col
						lg={5}
						md={6}
						className={styles.product_details_column}
					>
						<p className={styles.product_name}> {product.name} </p>
						{product.old_price && (
							<p className={styles.old_price}>
								{product.old_price} {store.currency}
							</p>
						)}

						<p className={styles.product_price}>
							{product.price} {store.currency}
							discount%
						</p>
						<div
							dangerouslySetInnerHTML={{
								__html: product.description,
							}}
							style={{ height: "200px", overflow: "scroll" }}
						></div>
					</Col>
					<Col lg={2} md={1} />
				</Row>
			</Container>
		);
	};

	const notFound = () => {
		return <p>Not Found.</p>;
	};

	const addToCart = () => {
		if (!product) return;

		cartContext?.addProduct(product, 1);
	};

	return (
		<React.Fragment>
			{product ? productDetails() : notFound()}
		</React.Fragment>
	);
}

export default ProductPage;
