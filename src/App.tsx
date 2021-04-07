import React, { useContext, useEffect, useState } from "react";
import "App.scss";

import HomePage from "./Pages/HomePage";
import CartPage from "./Pages/CartPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import StoreContext from "Contexts/StoreContext";
import data from "Resources/Data/data.json";
import LayoutContext from "Contexts/LayoutContext";
import CartContext from "Contexts/CartContext";

import Store from "Models/Store";
import Layout from "Models/Layout";
import Cart from "Models/Cart";

function App() {
	const [store, setStore] = useState<Store>(
		Object.assign(new Store("", "", "", "", ""), data.store)
	);
	const [layout, setLayout] = useState<Layout>(
		JSON.parse(JSON.stringify(data.layout))
	);
	const [cart, setCart] = useState<Cart>(
		JSON.parse(JSON.stringify(data.cart))
	);

	return (
		<CartContext.Provider value={cart}>
			<LayoutContext.Provider value={layout}>
				<StoreContext.Provider value={store}>
					<div className={store.readingDirectionCssClass()}>
						<Router>
							<NavigationBar />
							<Route exact path="/" component={HomePage} />
							<Route exact path="/cart" component={CartPage} />
						</Router>
					</div>
				</StoreContext.Provider>
			</LayoutContext.Provider>
		</CartContext.Provider>
	);
}

export default App;
