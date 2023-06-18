import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);
  return (
    <>
      <h1>Items in cart: {cart.length}</h1>
      {cart.map((product) => {
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
            <button onClick={() => removeFromCart(product)}>
              Remove from Cart
            </button>
          </div>
        );
      })}
    </>
  );
};
export default Cart;
