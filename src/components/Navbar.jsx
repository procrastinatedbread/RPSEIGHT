import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <NavLink to="/">Home</NavLink>
      <span>{" || "}</span>
      <NavLink to="/cart">Cart</NavLink>
      <span>{" || "}</span>
      <NavLink to="/wishlist">Wishlist</NavLink>
    </>
  );
};
export default Navbar;
