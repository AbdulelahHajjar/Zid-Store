import Store from "Models/Store";
import React, { Dispatch, SetStateAction } from "react";
import data from "Resources/Data/data.json";

let store: Store = JSON.parse(JSON.stringify(data.store));
const StoreCotnext = React.createContext(store);
export default StoreCotnext;
