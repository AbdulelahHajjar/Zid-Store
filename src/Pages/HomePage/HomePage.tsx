import { useContext } from "react";
import ProductCardView from "Components/ProductCardView/ProductCardView";
import StoreContext from "Contexts/StoreContext";
import CoverImage from "Components/CoverImage/CoverImage";
import LayoutContext from "Contexts/LayoutContext";
import HorizontalList from "Components/HorizontalList/HorizontalList";
import styles from "./HomePage.module.scss";

function HomePage() {
	const store = useContext(StoreContext);
	const layout = useContext(LayoutContext);

	const hotProducts = () => {
		return layout.body.hot_products.map((product, index) => (
			<ProductCardView key={index} product={product} />
		));
	};

	return (
		<div>
			<CoverImage imageUrl={layout.body.cover_image} />

			<HorizontalList rtl>{hotProducts()}</HorizontalList>
			<div style={{ height: "50vh" }}></div>
		</div>
	);
}

export default HomePage;

const flexContainer = {
	display: "flex",
	flexDirection: "row",
	padding: 0,
};
