import styles from "./CategoryPage.module.scss";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Product from "Models/Product";

function CategoryPage() {
	let { id } = useParams();

	useEffect(() => {
		if (!id || id.trim() === "") return;
		// var products: Product[] = [];
	}, []);
	return <div>cat</div>;
}

export default CategoryPage;
