import React, { createContext, useEffect, useState } from "react";
import { data } from "../data";

export const ProductsContext = createContext(null);

const AllProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(data);

  //   console.log(products);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default AllProductsProvider;
