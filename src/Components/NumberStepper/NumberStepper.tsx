import { useEffect, useState } from "react";
import styles from "./NumberStepper.module.scss";

type NumberStepperPropTypes = {
	onUpdate: (number) => void;
	initialValue?: number;
	min?: number;
	max?: number;
};

function NumberStepper({
	onUpdate,
	initialValue,
	min,
	max,
}: NumberStepperPropTypes) {
	const [value, setValue] = useState<number>(initialValue ?? min ?? 0);

	useEffect(() => {
		onUpdate(value);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const increment = () => {
		if (max != null && value + 1 > max) return;
		onUpdate(value + 1);
		setValue(value + 1);
	};
	const decrement = () => {
		if (min != null && value - 1 < min) return;
		onUpdate(value - 1);
		setValue(value - 1);
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
