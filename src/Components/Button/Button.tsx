import styles from "./Button.module.scss";

function Button({ children, onClick }) {
	return (
		<button onClick={onClick} className={styles.container}>
			{children}
		</button>
	);
}

export default Button;
