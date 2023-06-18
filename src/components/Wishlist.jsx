import { useContext } from "react";
import { WishlistContext } from "../contexts/WishlistContext";

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);
  return (
    <>
      <h1>Items in Wishlist: {wishlist.length}</h1>
      {wishlist.map((product) => {
        const {
          id,
          name,
          description,
          price,
          quantity,
          category,
          brand
        } = product;
        return (
          <div key={id}>
            <h3>{name}</h3>
            <p>{description}</p>
            <p>Price: {price}</p>
            <p>Quantity: {quantity}</p>
            <p>Category: {category}</p>
            <p>Brand: {brand}</p>
            <button onClick={() => removeFromWishlist(product)}>
              Remove from Wishlist
            </button>
          </div>
        );
      })}
    </>
  );
};
export default Wishlist;
