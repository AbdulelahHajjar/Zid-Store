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
			<div className={styles.text_container}>
				<div className={styles.text_highlight}></div>
				<span className={styles.text}>{text}</span>
			</div>
		</div>
	);
}

export default EmojiLabel;
