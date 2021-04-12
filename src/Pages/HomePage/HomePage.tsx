import { useContext } from "react";
import CoverImage from "Components/CoverImage/CoverImage";
import LayoutContext from "Contexts/LayoutContext";
import styles from "./HomePage.module.scss";
import Layout from "Models/Layout";
import ProductsSection from "Components/ProductsSection/ProductsSection";
import CustomButton from "Components/Button/CustomButton";
import { Link } from "react-router-dom";

function HomePage() {
	const layout: Layout = useContext<Layout>(LayoutContext);

	const sections = () => {
		return layout.body.sections.map((section, index) => {
			return <ProductsSection section={section} key={index} />;
		});
	};

	return (
		<div>
			<div className={styles.cover_image_wrapper}>
				<CoverImage imageUrl={layout.body.cover_image} />
			</div>

			<div className={styles.main_content}>{sections()}</div>

			<div className={styles.all_products_section}>
				<div className={styles.largeTitle}>أو تصفح جميع المنتجات!</div>
				<Link to="/products">
					<CustomButton>جميع المنتجات</CustomButton>
				</Link>
			</div>
		</div>
	);
}

export default HomePage;
