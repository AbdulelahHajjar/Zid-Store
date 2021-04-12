import React, { useContext } from "react";
import CoverImage from "Components/CoverImage/CoverImage";
import LayoutContext from "Contexts/LayoutContext";
import styles from "./HomePage.module.scss";
import Layout from "Models/Layout";
import ProductsSection from "Components/ProductsSection/ProductsSection";
import CustomButton from "Components/Button/CustomButton";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

function HomePage() {
	const layout: Layout = useContext<Layout>(LayoutContext);

	const sections = () => {
		return layout.body.sections.map((section, index) => {
			return <ProductsSection section={section} key={index} />;
		});
	};

	return (
		<React.Fragment>
			<div className={styles.cover_image_wrapper}>
				<CoverImage imageUrl={layout.body.cover_image} />
			</div>
			<Container fluid>
				<Row>
					<Col md={1} sm={0} />
					<Col md={10} sm={12}>
						<div className={styles.main_content}>{sections()}</div>

						<div className={styles.all_products_section}>
							<div className={styles.largeTitle}>
								أو تصفح جميع المنتجات!
							</div>
							<Link to="/products">
								<CustomButton>جميع المنتجات</CustomButton>
							</Link>
						</div>
					</Col>

					<Col md={1} sm={0} />
				</Row>
			</Container>
		</React.Fragment>
	);
}

export default HomePage;
