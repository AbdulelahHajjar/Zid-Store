import Cart from "Models/Cart";
import Product from "Models/Product";
import React, { useState } from "react";
import data from "Resources/Data/data.json";

export type CartContextType = {
	cart: Cart | null;
	addProduct: (product: Product) => void;
};

const CartContext = React.createContext<CartContextType>({
	cart: null,
	addProduct: (product) => console.warn("CartContext: No provider."),
});

export function CartContextProvider({ children }) {
	const [cart, setCart] = useState(Cart.fromJSON(data.cart));

	function addProduct(product) {
		console.log("Adding product " + product.id);
	}

	const defaultValue = {
		cart,
		addProduct,
	};

	return (
		<CartContext.Provider value={defaultValue}>
			{children}
		</CartContext.Provider>
	);
}

export default CartContext;
