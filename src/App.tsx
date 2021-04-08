import React, { useEffect, useState } from "react";
import "./App.scss";

import HomePage from "./Pages/HomePage/HomePage";
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
import MessageLine from "Components/MessageLine/MessageLine";
import CategoriesBar from "Components/CategoriesBar/CategoriesBar";

/*
	Notes to self:
		1- see convention for object name of scss module import
		
*/

function App() {
	const [store, setStore] = useState<Store>(Store.fromJSON(data.store));
	const [layout, setLayout] = useState<Layout>(Layout.fromJSON(data.layout));
	const [cart, setCart] = useState<Cart>(Cart.fromJSON(data.cart));

	useEffect(() => {
		document.title = store.name;
		console.log(store);
	}, [store]);

	return (
		<CartContext.Provider value={cart}>
			<LayoutContext.Provider value={layout}>
				<StoreContext.Provider value={store}>
					<div>
						<Router>
							<div className="complex_header_container">
								{layout.messages.map((message) => {
									return <MessageLine message={message} />;
								})}
								<NavigationBar />
								<CategoriesBar />
							</div>

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
