import Cart, { CartError, QuantifiedProduct } from "Models/Cart";
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
	deleteProduct: (productId: number) => void;
	numItems: () => number | null;
};

const CartContext = React.createContext<CartContextType>({
	cart: null,
	addProduct: (product, quantity) =>
		Result.error(CartError.noContextProvider),
	deleteProduct: (productId) => console.warn(CartError.noContextProvider),
	numItems: () => null,
});

export function CartContextProvider({ children }) {
	const [cart, setCart] = useState(Cart.fromJSON(data.cart));

	function addProduct(product, quantity): Result<CartError, never> {
		if (quantity <= product.minimum) {
			return Result.error(CartError.invalidQuantity);
		}

		let productIndexInCart = findProductIndex(product.id);
		if (
			quantity > product.quantity ||
			(productIndexInCart !== null &&
				productIndexInCart !== undefined &&
				quantity + cart.items[productIndexInCart].quantity >
					product.quantity)
		) {
			return Result.error(CartError.quantityExceedsStock);
		}

		let newItems = cart.items;

		if (productIndexInCart !== null && productIndexInCart !== undefined) {
			newItems[productIndexInCart].quantity += quantity;
		} else {
			newItems.push({ product, quantity: 1 });
		}
		setItems(newItems);
		return Result.ok();
	}

	function deleteProduct(productId) {
		let index = findProductIndex(productId);
		if (index === null || index === undefined) return;

		let newItems = cart.items;
		delete newItems[index];
		setItems(newItems);
	}

	function setItems(items: QuantifiedProduct[]) {
		setCart((prevState) => ({
			...prevState,
			items: items,
		}));
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
		deleteProduct,
		numItems,
	};

	return (
		<CartContext.Provider value={defaultValue}>
			{children}
		</CartContext.Provider>
	);
}

export default CartContext;
