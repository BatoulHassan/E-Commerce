import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import ReactDOM from "react-dom/client";
//import Products from "./components/products/products.jsx";

//ReactDom.render(<App />, document.getElementById('root'));

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />);