import { useContext, useEffect } from "react";
import { fakeFetch } from "../constants/constants";
import { ProductContext } from "../contexts/ProductContext";
import ProductCard from "./ProductCard";

const ProductListing = () => {
  const { productList, setProductList } = useContext(ProductContext);
  useEffect(() => {
    const innerFunction = async () => {
      const { data } = await fakeFetch("https://example.com/api/products");
      setProductList(data.products);
    };
    innerFunction();
  }, []);
  return (
    <>
      <h1>Product List</h1>
      {productList.map((product) => {
        return <ProductCard key={product.id} {...product} noDetail />;
      })}
    </>
  );
};
export default ProductListing;
