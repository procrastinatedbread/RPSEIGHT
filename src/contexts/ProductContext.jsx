import { createContext, useState } from "react";

export const ProductContext = createContext({
  productList: [],
  setProductList: (id) => {}
});
export const ProductProvider = ({ children }) => {
  const [productList, setProductList] = useState([]);
  const productContext = { productList, setProductList };
  return (
    <ProductContext.Provider value={productContext}>
      {children}
    </ProductContext.Provider>
  );
};
