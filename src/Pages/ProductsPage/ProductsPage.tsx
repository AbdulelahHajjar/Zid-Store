import ProductCardView from "Components/ProductCardView/ProductCardView";
import Product from "Models/Product";
import styles from "./ProductsPage.module.scss";

type ProductsPagePropTypes = {
	products: Product[];
	title?: string;
};
function ProductsPage({ products, title }: ProductsPagePropTypes) {
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
