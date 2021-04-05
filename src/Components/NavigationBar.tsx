import React from "react";
import storeLogo from "../Resources/Images/store-logo.png";
import styles from "./NavigationBar.module.css";

function NavigationBar() {
	return (
		<div className={styles.bar}>
			<img className={styles.logo} src={storeLogo} alt="Store Logo" />
			<div>
				<p>Sign in</p>
				<p>Sign up</p>
			</div>
		</div>
	);
}

export default NavigationBar;
