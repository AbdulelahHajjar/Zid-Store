import styles from "./CategoryPage.module.scss";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Product from "Models/Product";
import LayoutContext from "Contexts/LayoutContext";
import Layout from "Models/Layout";
import Category from "Models/Category";

function CategoryPage() {
	let { id } = useParams();
	const layout: Layout = useContext<Layout>(LayoutContext);
	const [products, setProducts] = useState<Product[]>([]);

	useEffect(() => {
		let intId = parseInt(id);

		var products: Product[] = layout.body.all_products.filter((product) => {
			return product.category_id === intId;
		});

		setProducts(products);
	}, [id, layout.body.all_products]);

	return (
		<div>
			{products.map((p) => {
				return p.id;
			})}
		</div>
	);
}

export default CategoryPage;
