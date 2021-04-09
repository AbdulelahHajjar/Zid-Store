import Cart, { CartError } from "Models/Cart";
import Product from "Models/Product";
import React, { useEffect, useRef, useState } from "react";
import data from "Resources/Data/data.json";
import { Result } from "typescript-result";

export type CartContextType = {
	cart: Cart | null;
	addProduct: (
		product: Product,
		quantity: number
	) => Result<CartError, never>;
	numItems: () => number | null;
};

const CartContext = React.createContext<CartContextType>({
	cart: null,
	addProduct: (product, quantity) =>
		Result.error(CartError.noContextProvider),
	numItems: () => null,
});

export function CartContextProvider({ children }) {
	const [cart, setCart] = useState(Cart.fromJSON(data.cart));

	function addProduct(product, quantity): Result<CartError, never> {
		if (quantity <= 0) {
			return Result.error(CartError.invalidQuantity);
		}

		if (
			quantity > product.quantity ||
			quantity + cart.items[product.id] > product.quantity
		) {
			return Result.error(CartError.quantityExceedsStock);
		}

		let productIndexInCart = findProductIndex(product.id);
		let newItems = cart.items;

		if (productIndexInCart !== null && productIndexInCart !== undefined) {
			newItems[productIndexInCart].quantity += quantity;
		} else {
			newItems.push({ product, quantity: 1 });
		}

		setCart((prevState) => ({
			...prevState,
			items: newItems,
		}));

		return Result.ok();
	}

	function findProductIndex(productId: number): number | null {
		let productIndex = cart.items
			.map((element) => {
				return element.product.id;
			})
			.findIndex((id) => {
				return id === productId;
			});
		if (productIndex === -1) {
			return null;
		} else {
			return productIndex;
		}
	}

	function numItems() {
		return cart.items.length;
	}

	const defaultValue = {
		cart,
		addProduct,
		numItems,
	};

	return (
		<CartContext.Provider value={defaultValue}>
			{children}
		</CartContext.Provider>
	);
}

export default CartContext;
