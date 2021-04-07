import { useContext } from "react";
import ProductCardView from "Components/ProductCardView/ProductCardView";
import StoreContext from "Contexts/StoreContext";
import CoverImage from "Components/CoverImage/CoverImage";
import LayoutContext from "Contexts/LayoutContext";
import ScrollMenu from "react-horizontal-scrolling-menu";

function HomePage() {
	const store = useContext(StoreContext);
	const layout = useContext(LayoutContext);

	const hotProducts = () => {
		return layout.body.hot_products.map((product, index) => (
			<ProductCardView key={index} product={product} />
		));
	};

	const onSelect = () => {
		console.log("asdf");
	};

	return (
		<div>
			<CoverImage imageUrl={layout.body.cover_image} />
			<ScrollMenu
				wheel={false}
				data={hotProducts()}
				arrowLeft={<div>{"<"}</div>}
				arrowRight={<div>{">"}</div>}
				selected={undefined}
				onSelect={onSelect}
			/>
			<CoverImage imageUrl={layout.body.cover_image} />
		</div>
	);
}

export default HomePage;
