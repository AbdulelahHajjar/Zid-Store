import React from "react";
import styles from "./CoverImage.module.scss";

type CoverImageProps = {
	imageUrl: string;
};

function CoverImage({ imageUrl }: CoverImageProps) {
	return (
		<div className={styles.container}>
			<img className={styles.image} src={imageUrl} alt="Store Cover" />
		</div>
	);
}

export default CoverImage;
