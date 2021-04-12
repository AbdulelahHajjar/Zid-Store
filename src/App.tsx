import React, { useEffect, useState } from "react";
import "./App.scss";

import HomePage from "./Pages/HomePage/HomePage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import StoreContext from "Contexts/StoreContext";
import data from "Resources/Data/data.json";
import LayoutContext from "Contexts/LayoutContext";
import { CartContextProvider } from "Contexts/CartContext";

import Store from "Models/Store";
import Layout from "Models/Layout";
import Cart from "Models/Cart";
import MessageLine from "Components/MessageLine/MessageLine";
import CategoriesBar from "Components/CategoriesBar/CategoriesBar";
import ProductPage from "Pages/ProductPage/ProductPage";

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
		<CartContextProvider>
			<LayoutContext.Provider value={layout}>
				<StoreContext.Provider value={store}>
					<div>
						<Router>
							<div className="complex_header_container">
								{layout.messages.map((message, index) => {
									return (
										<MessageLine
											message={message}
											key={index}
										/>
									);
								})}
								<NavigationBar />
								<CategoriesBar />
							</div>

							<Route exact path="/" component={HomePage} />
							<Route
								path="/product/:id"
								component={ProductPage}
							/>
						</Router>
					</div>
				</StoreContext.Provider>
			</LayoutContext.Provider>
		</CartContextProvider>
	);
}

export default App;
