import React from "react";
import { Link } from "react-router-dom";

function CartPage() {
	return (
		<div>
			<p>Cart Page</p>
			<Link to={"/"}>
				<p>Go to Home</p>
			</Link>
		</div>
	);
}

export default CartPage;
