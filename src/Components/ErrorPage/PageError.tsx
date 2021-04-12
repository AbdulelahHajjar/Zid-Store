import CustomButton from "Components/Button/CustomButton";
import styles from "./PageError.module.scss";
import { useHistory } from "react-router-dom";

type PageErrorPropTypes = {
	text: string;
};

function PageError({ text }: PageErrorPropTypes) {
	const history = useHistory();
	return (
		<div className={styles.container}>
			{text}
			<CustomButton
				onClick={() => {
					history.goBack();
				}}
			>
				للخلف
			</CustomButton>
		</div>
	);
}

export default PageError;
