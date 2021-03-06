import { useEffect, useState } from "react";
import "./App.scss";

import HomePage from "./Pages/HomePage/HomePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import StoreContext from "Contexts/StoreContext";
import data from "Resources/Data/data.json";
import LayoutContext from "Contexts/LayoutContext";
import { CartContextProvider } from "Contexts/CartContext";

import Store from "Models/Store";
import Layout from "Models/Layout";
import MessageLine from "Components/MessageLine/MessageLine";
import CategoriesBar from "Components/CategoriesBar/CategoriesBar";
import ProductPage from "Pages/ProductPage/ProductPage";
import ProductsPage from "Pages/ProductsPage/ProductsPage";
import CategoryPage from "Pages/CategoryPage/CategoryPage";

/*
	Notes to self:
		1- see convention for object name of scss module import
		
*/

function App() {
	const [store] = useState<Store>(Store.fromJSON(data.store)); // setStore will be implemented when connected with a database.
	const [layout] = useState<Layout>(Layout.fromJSON(data.layout)); // setLayout will be implemented when connected with a database.

	useEffect(() => {
		document.title = store.name;
		document
			.getElementsByTagName("html")[0]
			.setAttribute("dir", store.language_code === "ar" ? "rtl" : "ltr");
		document
			.getElementsByTagName("html")[0]
			.setAttribute("lang", store.language_code);

		var favicon = document.getElementById("favicon") as HTMLLinkElement;
		if (favicon) {
			favicon.href = layout.logo;
		}
	}, [layout.logo, store]);

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

							<Switch>
								<Route exact path="/" component={HomePage} />

								<Route
									exact
									path="/product/:id/"
									component={ProductPage}
								/>
								<Route
									exact
									path="/category/:link/:id"
									component={CategoryPage}
								/>
								<Route
									exact
									path="/products"
									component={ProductsPage}
								/>
								<Route exact path="/*" component={HomePage} />
							</Switch>
						</Router>
					</div>
				</StoreContext.Provider>
			</LayoutContext.Provider>
		</CartContextProvider>
	);
}

export default App;
