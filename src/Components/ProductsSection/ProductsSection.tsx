import styles from "./ProductsSection.module.scss";
import EmojiLabel from "Components/EmojiLabel/EmojiLabel";
import HorizontalList from "Components/HorizontalList/HorizontalList";
import Section from "Models/Section";
import { useContext } from "react";
import LayoutContext from "Contexts/LayoutContext";
import Layout from "Models/Layout";
import ProductCardView from "Components/ProductCardView/ProductCardView";

type ProductsSectionPropTypes = {
	section: Section;
};

function ProductsSection({ section }: ProductsSectionPropTypes) {
	const layout: Layout = useContext<Layout>(LayoutContext);

	const productCards = () => {
		return layout.body.all_products
			.filter((product) => {
				return section.product_ids.includes(product.id);
			})
			.map((product) => {
				return <ProductCardView product={product} key={product.id} />;
			});
	};

	return (
		<div className={styles.section}>
			<div className={styles.emoji_label_wrapper}>
				<EmojiLabel emoji={section.emoji} text={section.title} />
			</div>
			<HorizontalList rtl>{productCards()}</HorizontalList>
		</div>
	);
}

export default ProductsSection;
