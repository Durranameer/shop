import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./component/shop.jsx";
import Navbar from "./component/Navbar.jsx";
import Prodectdetails from "./component/prodectdetails.jsx";
import Cart from "./component/Cart.jsx";

function App() {
  const [cartItems, setCartItems] = useState([]);
  //this function is executed after we click on the Add to cart button
  // setCartItems([...cartItems, product]);
  const addToCart = (product) => {
    console.log(cartItems);

    const productExist = cartItems.find(
      (item) => item.product.id === product.id
    );
    console.log(productExist);

    if (productExist) {
      setCartItems(
        cartItems.map((item) =>
          item.product.id === product.id
            ? { ...item, increment: productExist.increment + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { product, increment: 1 }]);
    }
  };

  const removeFromCart = (product) => {
    console.log(cartItems);

    const productExist = cartItems.find(
      (item) => item.product.id === product.id
    );
    console.log(productExist);

    if (productExist) {
      setCartItems(
        cartItems.map((item) =>
          item.product.id === product.id
            ? { ...item, increment: productExist.increment - 1 }
            : item
        )
      );
    }
  };

  return (
    <Router>
      <Navbar cartItems={cartItems} />
      <Routes>
        {" "}
        {/*a routering container */}
        <Route
          path="/"
          element={
            <Shop
              cartItems={cartItems}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          }
        />
        <Route
          path="/shop"
          element={
            <Shop
              cartItems={cartItems}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          }
        />
        <Route path="/products/:id" element={<Prodectdetails />} />{" "}
        {/* Dynamic route */}
      </Routes>
    </Router>
  );
}

export default App;
