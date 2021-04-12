import { useEffect, useState } from "react";
import styles from "./NumberStepper.module.scss";

type NumberStepper = {
	onUpdate: (number) => void;
	initialValue?: number;
	min?: number;
	max?: number;
};

function NumberStepper({ onUpdate, initialValue, min, max }: NumberStepper) {
	const [value, setValue] = useState<number>(initialValue ?? min ?? 0);

	const increment = () => {
		if (max != null && value + 1 > max) return;
		setValue(value + 1);
		onUpdate(value);
	};
	const decrement = () => {
		if (min != null && value - 1 < min) return;
		setValue(value - 1);
		onUpdate(value);
	};

	return (
		<div className={styles.container}>
			<button
				onClick={() => increment()}
				className={styles.leading_button}
			>
				+
			</button>
			<div className={styles.value}>{value}</div>
			<button
				onClick={() => decrement()}
				className={styles.trailing_button}
			>
				-
			</button>
		</div>
	);
}

export default NumberStepper;
