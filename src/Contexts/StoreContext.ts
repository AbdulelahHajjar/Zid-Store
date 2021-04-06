import React from "react";
import data from "Resources/Data/data.json";

const StoreContext = React.createContext(data.store);
export default StoreContext;
