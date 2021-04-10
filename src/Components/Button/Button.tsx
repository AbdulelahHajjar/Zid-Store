import styles from "./Button.module.scss";

type ButtonPropTypes = {
	children;
	onClick?: () => void;
};

function Button({ children, onClick }: ButtonPropTypes) {
	return (
		<button onClick={onClick} className={styles.container}>
			{children}
		</button>
	);
}

export default Button;
