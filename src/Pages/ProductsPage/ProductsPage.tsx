import Product from "Models/Product";
import styles from "./ProductsPage.module.scss";

type ProductsPagePropTypes = {
	products: Product[];
	title?: string;
};
function ProductsPage({ products, title }: ProductsPagePropTypes) {
	return <div></div>;
}

export default ProductsPage;
