import Layout from "Models/Layout";
import React from "react";
import data from "Resources/Data/data.json";

let layout: Layout = JSON.parse(JSON.stringify(data.layout));
const LayoutContext = React.createContext(layout);
export default LayoutContext;
