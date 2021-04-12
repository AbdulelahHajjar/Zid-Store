import { useContext } from "react";
import ProductCardView from "Components/ProductCardView/ProductCardView";
import StoreContext from "Contexts/StoreContext";
import CoverImage from "Components/CoverImage/CoverImage";
import LayoutContext from "Contexts/LayoutContext";
import HorizontalList from "Components/HorizontalList/HorizontalList";
import styles from "./HomePage.module.scss";
import EmojiLabel from "Components/EmojiLabel/EmojiLabel";
import Layout from "Models/Layout";
import ProductsSection from "Components/ProductsSection/ProductsSection";

function HomePage() {
	const store = useContext(StoreContext);
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

			<div className={styles.main_content}>
				{sections()}
				<div style={{ height: "50vh" }}></div>
			</div>
		</div>
	);
}

export default HomePage;
