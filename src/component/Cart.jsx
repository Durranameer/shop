import React, { useEffect, useState } from "react";
import "./Cart.css";
const Cart = ({ cartItems, addToCart, removeFromCart }) => {
  const [total, settotal] = useState(0);
  useEffect(() => {
    totalprice();
  }, [cartItems]);  
  const totalprice = () => {
    let p = 0; 
    for (let i = 0; i < cartItems.length; i++) {
      p += cartItems[i]?.product.price * cartItems[i]?.increment;
    }
    settotal(p);
  };

  return (
    <div className="cart">
      <h1>Your Cart </h1>
      {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <div className="Cart">
          <div className="list">
            {cartItems.map((item) => (
              <div key={item.product.id} className="product">
                <img
                  src={item.product.thumbnail}
                  alt={item.product.title}
                  className="image"
                />

                <h3>{item.product.title}</h3>
                <p> ${item.product.price}</p>
                <div className="productdetails">
                  <button
                    className="add"
                    onClick={() => addToCart(item.product)}
                  >
                    +
                  </button>
                  <p class="plus-minus-value">{item.increment}</p>
                  <button
                    className="remove"
                    onClick={() => removeFromCart(item.product)}
                  >
                    -
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div>
            <p id="total">Total price: {Math.round(total)}$ </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
