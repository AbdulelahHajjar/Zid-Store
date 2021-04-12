import Store from "Models/Store";
import React from "react";
import data from "Resources/Data/data.json";

let store: Store = JSON.parse(JSON.stringify(data.store));
const StoreContext = React.createContext(store);
export default StoreContext;
