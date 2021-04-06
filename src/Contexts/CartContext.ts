import React from "react";
import data from "Resources/Data/data.json";

const CartContext = React.createContext(data.cart);
export default CartContext;
