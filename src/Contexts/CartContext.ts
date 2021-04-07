import Cart from "Models/Cart";
import React from "react";
import data from "Resources/Data/data.json";

let cart: Cart = JSON.parse(JSON.stringify(data.cart));
const CartContext = React.createContext(cart);
export default CartContext;
