import { createContext, useState } from "react";

export const WishlistContext = createContext({
  wishlist: [],
  addToWishlist: (item) => {},
  removeFromWishlist: (item) => {}
});
export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const addToWishlist = (item) => {
    setWishlist([...wishlist, item]);
  };
  const removeFromWishlist = (item) => {
    const updatedWishlist = wishlist.filter(
      (product) => product.name !== item.name
    );
    setWishlist(updatedWishlist);
  };
  const wishlistContext = { wishlist, addToWishlist, removeFromWishlist };

  return (
    <WishlistContext.Provider value={wishlistContext}>
      {children}
    </WishlistContext.Provider>
  );
};
