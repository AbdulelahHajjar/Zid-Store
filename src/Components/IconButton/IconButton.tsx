import styles from "./IconButton.module.scss";

type IconButtonPropTypes = {
	icon: string;
	badgeNumber: number | null;
	showZero?: boolean;
	alt?: string;
	onClick?: () => void;
};
function IconButton({
	icon,
	badgeNumber,
	showZero,
	alt,
	onClick,
}: IconButtonPropTypes) {
	const button = () => {
		return (
			<div className={styles.button}>
				<img src={icon} className={styles.icon} alt={alt} />
			</div>
		);
	};

	const badge = () => {
		return (
			<div className={styles.badge_container}>
				<p className={styles.badge}>{badgeNumber}</p>
			</div>
		);
	};
	return (
		<button onClick={onClick} className={styles.container}>
			{button()}
			{badgeNumber != null && (badgeNumber !== 0 || showZero) && badge()}
		</button>
	);
}

export default IconButton;
