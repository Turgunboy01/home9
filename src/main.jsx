import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AllProductsProvider, {
  ProductsContext,
} from "./context/AllProductsProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AllProductsProvider>
      <App />
    </AllProductsProvider>
  </React.StrictMode>
);
