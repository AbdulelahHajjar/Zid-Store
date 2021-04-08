import LayoutContext from "Contexts/LayoutContext";
import StoreCotnext from "Contexts/StoreContext";
import React, { useContext } from "react";
import storeLogo from "Resources/Images/store-logo.png";
import styles from "./NavigationBar.module.scss";

function NavigationBar() {
	const layout = useContext(LayoutContext);

	return (
		<div className={styles.bar}>
			<img className={styles.logo} src={layout.logo} alt="Store Logo" />
			<div>
				<p>Sign in</p>
				<p>Sign up</p>
			</div>
		</div>
	);
}

export default NavigationBar;
