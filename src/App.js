import { Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import ErrorPage from "./components/ErrorPage";
import Navbar from "./components/Navbar";
import ProductListing from "./components/ProductListing";
import Wishlist from "./components/Wishlist";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductListing />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}
