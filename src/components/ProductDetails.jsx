import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ProductContext } from "../contexts/ProductContext";
import ProductCard from "./ProductCard";

const ProductDetails = () => {
  const { productID } = useParams();
  const { productList } = useContext(ProductContext);
  const selectedProduct = productList.find(({ id }) => id === +productID);
  return (
    <>
      <h1>About</h1>
      <ProductCard {...selectedProduct} />
      <Link to="/">See all products </Link>
    </>
  );
};
export default ProductDetails;
