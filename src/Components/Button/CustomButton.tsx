import styles from "./CustomButton.module.scss";

type ButtonPropTypes = {
	children;
	onClick?: () => void;
};

function CustomButton({ children, onClick }: ButtonPropTypes) {
	return (
		<button onClick={onClick} className={styles.container}>
			{children}
		</button>
	);
}

export default CustomButton;
