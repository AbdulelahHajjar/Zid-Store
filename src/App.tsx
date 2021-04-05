import React from "react";
import HomePage from "./Pages/HomePage";
import CartPage from "./Pages/CartPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavigationBar from "./Models/NavigationBar";

function App() {
	return (
		<Router>
			<NavigationBar></NavigationBar>
			<Route exact path="/" component={HomePage} />
			<Route exact path="/cart" component={CartPage} />
		</Router>
	);
}

export default App;
