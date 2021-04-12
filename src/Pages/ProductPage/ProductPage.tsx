import React, { useContext, useEffect, useState } from "react";
import styles from "./ProductPage.module.scss";
import { useParams } from "react-router-dom";
import LayoutContext from "Contexts/LayoutContext";
import Product from "Models/Product";
import CartContext from "Contexts/CartContext";
import { Col, Container, Row } from "react-bootstrap";
import Spacer from "Components/Spacer/Spacer";
import StoreContext from "Contexts/StoreContext";
import NumberStepper from "Components/NumberStepper/NumberStepper";
import Button from "Components/Button/CustomButton";

function ProductPage(props) {
	let { id } = useParams();

	const layout = useContext(LayoutContext);
	const cartContext = useContext(CartContext);
	const store = useContext(StoreContext);

	const [product, setProduct] = useState<Product | null>(null);
	const [quantity, setQuantity] = useState<number>(product?.minimum ?? 1);

	useEffect(() => {
		if (!id || id.trim() === "") return;

		var fetchedProduct: Product | undefined = props.location.state?.product;
		if (!fetchedProduct) {
			fetchedProduct = layout.body.all_products.find((element) => {
				return "" + element.id === id;
			});
		}

		if (!fetchedProduct) return;
		setProduct(fetchedProduct);
	}, [layout.body, id, props.location.state?.product]);

	const productDetails = () => {
		if (!product) return;
		return (
			<Container fluid>
				<Row>
					<Spacer height={"72px"} />
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
						<div className={styles.product_name}>
							{" "}
							{product.name}{" "}
						</div>
						{product.old_price && (
							<div className={styles.old_price}>
								{product.old_price} {store.currency}
							</div>
						)}

						<div className={styles.product_price}>
							{product.price} {store.currency}
						</div>

						<div className={styles.stock_availability}>
							{product.quantity > 0 ? "متوفر" : "غير متوفر"}
						</div>
						<div
							dangerouslySetInnerHTML={{
								__html: product.description,
							}}
							style={{ height: "200px", overflow: "scroll" }}
						></div>
						<Spacer height={"20px"} />
						<div className={styles.product_actions}>
							<NumberStepper
								min={product.minimum}
								max={product.quantity}
								onUpdate={(value) => setQuantity(value)}
							/>
							<Button onClick={() => addToCart()}>
								أضف للسلة
							</Button>
							<div className={styles.product_footer}>
								<div>رقم المنتج: {product.sku}</div>
								<div>آخر تحديث: {product.updated_at.date}</div>
							</div>
						</div>
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
		console.log(quantity);
		cartContext?.addProduct(product, quantity);
	};

	return (
		<React.Fragment>
			{product ? productDetails() : notFound()}
		</React.Fragment>
	);
}

export default ProductPage;
