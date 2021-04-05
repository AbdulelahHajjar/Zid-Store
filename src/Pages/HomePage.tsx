import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
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
