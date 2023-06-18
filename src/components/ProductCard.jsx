import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { WishlistContext } from "../contexts/WishlistContext";
import { Link } from "react-router-dom";
const ProductCard = (product) => {
  const {
    id,
    name,
    description,
    price,
    quantity,
    category,
    brand,
    noDetail
  } = product;
  const { addToCart } = useContext(CartContext);
  const { addToWishist } = useContext(WishlistContext);
  return (
    <div>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{price}</p>
      {noDetail ? (
        <Link to={`/product/${id}`}>Show Details</Link>
      ) : (
        <div>
          <p>Quantity: {quantity}</p>
          <p>Category: {category}</p>
          <p>Brand: {brand}</p>
        </div>
      )}
      <div>
        <button onClick={() => addToCart(product)}>Add to cart</button>
      </div>
      <div>
        <button onClick={() => addToWishist(product)}>Add to wishlist</button>
      </div>
    </div>
  );
};
export default ProductCard;
