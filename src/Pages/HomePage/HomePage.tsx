import { useContext } from "react";
import ProductCardView from "Components/ProductCardView/ProductCardView";
import StoreContext from "Contexts/StoreContext";
import CoverImage from "Components/CoverImage/CoverImage";
import LayoutContext from "Contexts/LayoutContext";
import HorizontalList from "Components/HorizontalList/HorizontalList";
import styles from "./HomePage.module.scss";
import EmojiLabel from "Components/EmojiLabel/EmojiLabel";

function HomePage() {
	const store = useContext(StoreContext);
	const layout = useContext(LayoutContext);

	const hotProducts = () => {
		return layout.body.hot_products.map((product, index) => (
			<ProductCardView key={index} product={product} />
		));
	};

	const recentProducts = () => {
		return layout.body.recent_products.map((product, index) => (
			<ProductCardView key={index} product={product} />
		));
	};

	return (
		<div>
			<div className={styles.cover_image_wrapper}>
				<CoverImage imageUrl={layout.body.cover_image} />
			</div>

			<div className={styles.main_content}>
				<div className={styles.section}>
					<div className={styles.emoji_label_wrapper}>
						<EmojiLabel emoji="🔥" text="المنتجات الشائعة" />
					</div>
					{hotProducts()}
				</div>

				<div className={styles.section}>
					<div className={styles.emoji_label_wrapper}>
						<EmojiLabel emoji="⏳" text="آخر المنتجات" />
					</div>
					<HorizontalList rtl>{recentProducts()}</HorizontalList>
				</div>

				<div style={{ height: "50vh" }}></div>
			</div>
		</div>
	);
}

export default HomePage;
