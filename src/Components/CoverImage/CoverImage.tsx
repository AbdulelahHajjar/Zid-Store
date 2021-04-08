import React from "react";
import styles from "./CoverImage.module.scss";

type CoverImageProps = {
	imageUrl: string;
};

function CoverImage({ imageUrl }: CoverImageProps) {
	return <img className={styles.image} src={imageUrl} alt="Store Cover" />;
}

export default CoverImage;
