import React from "react";
import styles from "./EmojiLabel.module.scss";

type EmojiLabelPropTypes = {
	emoji: string;
	text: string;
};

function EmojiLabel({ emoji, text }: EmojiLabelPropTypes) {
	return (
		<div className={styles.container}>
			<div className={styles.emoji_container}>
				<span className={styles.emoji}>{emoji}</span>
			</div>
			<span className={styles.text}>{text}</span>
		</div>
	);
}

export default EmojiLabel;
