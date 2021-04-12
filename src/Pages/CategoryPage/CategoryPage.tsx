import { useParams } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import Product from "Models/Product";
import LayoutContext from "Contexts/LayoutContext";
import Layout from "Models/Layout";
import ProductsPage from "../ProductsPage/ProductsPage";
import Category from "Models/Category";

function CategoryPage() {
	let { id } = useParams();
	const layout: Layout = useContext<Layout>(LayoutContext);
	const [products, setProducts] = useState<Product[]>([]);
	const [category, setCategory] = useState<Category | undefined>();

	useEffect(() => {
		let intId = parseInt(id);
		let category = layout.navigation.categories.find((cat) => {
			return cat.id === intId;
		});

		setCategory(category);

		var products: Product[] = layout.body.all_products.filter((product) => {
			return product.category_id === category?.id;
		});

		setProducts(products);
	}, [id, layout.body.all_products, layout.navigation.categories]);

	return (
		<React.Fragment>
			<ProductsPage products={products} title={category?.name} />
		</React.Fragment>
	);
}

export default CategoryPage;
