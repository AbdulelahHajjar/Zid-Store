import React, { useContext } from "react";
import { Link } from "react-router-dom";
import data from "../Resources/Data/data.json";
import Store from "../Models/Store";
import Layout from "../Models/Layout";
import Cart from "../Models/Cart";
import ProductCardView from "Components/ProductCardView/ProductCardView";
import StoreContext from "Contexts/StoreContext";
import CoverImage from "Components/CoverImage/CoverImage";
import LayoutContext from "Contexts/LayoutContext";

function HomePage() {
	const store = useContext(StoreContext);
	const layout = useContext(LayoutContext);

	return (
		<div>
			<CoverImage imageUrl={layout.body.cover_image} />
			<ProductCardView product={data.layout.body.hot_products[1]} />
		</div>
	);
}

export default HomePage;
