import React from "react";
import { Link } from "react-router-dom";
import data from "../Resources/Data/data.json";
import Store from "../Models/Store";
import Layout from "../Models/Layout";
import Cart from "../Models/Cart";

function HomePage() {
	let store: Store = data.store;
	let layout: Layout = data.layout;
	let cart: Cart = data.cart;

	console.log(store);
	console.log(layout);
	console.log(cart);

	return (
		<div>
			<p>Home Page</p>
			<Link to={"/cart"}>
				<p>Go to Cart</p>
			</Link>
		</div>
	);
}

export default HomePage;
