import Cart, { CartError, QuantifiedProduct } from "Models/Cart";
import Product from "Models/Product";
import React, { useState } from "react";
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
	totalPrice: () => number | null;
	updateQuantity: (
		product: Product,
		newQuantity: number
	) => Result<CartError, never>;
};

const CartContext = React.createContext<CartContextType>({
	cart: null,
	addProduct: (product, quantity) =>
		Result.error(CartError.noContextProvider),
	deleteProduct: (productId) => console.warn(CartError.noContextProvider),
	numItems: () => null,
	totalPrice: () => null,
	updateQuantity: (product, newQuantity) =>
		Result.error(CartError.noContextProvider),
});

export function CartContextProvider({ children }) {
	const [cart, setCart] = useState(Cart.fromJSON(data.cart));

	function addProduct(product, quantity): Result<CartError, never> {
		let productIndex = findProductIndex(product.id);
		if (!isValidQuantity(product, productIndex, quantity))
			return Result.error(CartError.invalidQuantity);

		let newItems = cart.items;
		if (productIndex !== null && productIndex !== undefined) {
			newItems[productIndex].quantity += quantity;
		} else {
			newItems.push({ product, quantity: quantity });
		}
		setItems(newItems);
		return Result.ok();
	}

	function isValidQuantity(
		product: Product,
		productIndex: number | null,
		quantity: number
	): boolean {
		if (quantity < product.minimum || quantity > product.quantity)
			return false;

		if (productIndex === null || productIndex === undefined) return true;

		if (quantity + cart.items[productIndex].quantity > product.quantity) {
			return false;
		}
		return true;
	}

	function deleteProduct(productId) {
		let index = findProductIndex(productId);
		if (index === null || index === undefined) return;
		let newItems = cart.items;
		newItems = cart.items.filter((element) => {
			return element.product.id !== productId;
		});
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
		// if (productIndex === -1) {
		// 	return null;
		// } else {
		// 	return productIndex;
		// }

		return productIndex === -1 ? null : productIndex;
	}

	function numItems() {
		return cart.items
			.map((element) => {
				return element.quantity;
			})
			.reduce((a, b) => a + b, 0);
	}

	function totalPrice() {
		return cart.items
			.map((element) => {
				return element.product.price * element.quantity;
			})
			.reduce((a, b) => a + b, 0);
	}

	function updateQuantity(
		product: Product,
		newQuantity: number
	): Result<CartError, never> {
		let productIndex = findProductIndex(product.id);
		if (
			productIndex === null ||
			!isValidQuantity(product, productIndex, newQuantity)
		)
			return Result.error(CartError.invalidQuantity);

		let newItems = cart.items;
		newItems[productIndex].quantity = newQuantity;
		setItems(newItems);
		return Result.ok();
	}

	const defaultValue = {
		cart,
		addProduct,
		deleteProduct,
		numItems,
		totalPrice,
		updateQuantity,
	};

	return (
		<CartContext.Provider value={defaultValue}>
			{children}
		</CartContext.Provider>
	);
}

export default CartContext;
