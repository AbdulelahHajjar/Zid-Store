import ProductCardView from "Components/ProductCardView/ProductCardView";
import LayoutContext from "Contexts/LayoutContext";
import Layout from "Models/Layout";
import Product from "Models/Product";
import { useContext, useEffect, useState } from "react";
import styles from "./ProductsPage.module.scss";

type ProductsPagePropTypes = {
	products?: Product[];
	title?: string;
};
function ProductsPage(props: ProductsPagePropTypes) {
	const layout: Layout = useContext<Layout>(LayoutContext);
	const [products, setProducts] = useState<Product[]>(
		layout.body.all_products
	);
	const [title, setTitle] = useState<string>("جميع المنتجات");

	useEffect(() => {
		setProducts(props.products ?? layout.body.all_products);
		setTitle(props.title ?? "جميع المنتجات");
	}, [layout.body.all_products, props.products, props.title]);

	return (
		<div>
			<div className={styles.title_container}>{title}</div>
			<div className={styles.products}>
				{products.map((product) => {
					return <ProductCardView product={product} />;
				})}
			</div>
		</div>
	);
}

export default ProductsPage;
