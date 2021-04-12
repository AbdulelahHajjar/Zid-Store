import { useEffect } from "react";
import styles from "./CoverImage.module.scss";

type CoverImageProps = {
	imageUrl: string;
};

function CoverImage({ imageUrl }: CoverImageProps) {
	useEffect(() => {
		console.log(imageUrl);
	});
	return <img className={styles.image} src={imageUrl} alt="Store Cover" />;
}

export default CoverImage;
