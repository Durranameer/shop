import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navebar.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = ({ cartItems }) => {
  //
  const [sum, setSum] = useState(0);
  const sum_increment = () => {
    //for loop to sum the increment of cart items
    let s = 0;
    if (cartItems) {
      for (let i = 0; i < cartItems.length; i++) {
        const itemCount = cartItems[i]?.increment;
        s += itemCount;
      }
    }
    setSum(s);
  };

  useEffect(() => {
    sum_increment();
  }, [cartItems]);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Xaki Shop</Link>
      </div>
      <div className="navbar-links">
        <Link to="/shop">Shop</Link>
        {/* <Link to="/login">Login</Link> */}
        <Link to="/cart" className="cart-link">
          <span>Cart ({sum && sum})</span>
          <FaShoppingCart />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
