import React from 'react';
import './shop.css';

const CartItem = ({ addToCart, cartItem, removeFromCart, handle, product }) => {
  const item = product  cartItem?.item  {}; // Handle both cart and shop product
  const increment = cartItem ? cartItem.increment : 1; // Default increment for shop

  return (
    <div key={item.id} className="product">
      <img
        src={item.thumbnail}
        alt={item.title}
        className="product-image"
      />
      <h3>{item.title}</h3>
      <p>Category: {item.category}</p>
      <p>${item.price}</p>
      <button onClick={() => handle(item.id)}>View Details</button>
      <div className="product-details">
        <button className="add" onClick={() => addToCart(item)}>
          +
        </button>
        <p className="plus-minus-value">{increment}</p>
        {cartItem && (
          <button className="remove" onClick={() => removeFromCart(item.id)}>
            -
          </button>
        )}
      </div>
    </div>
  );
};

export default CartItem
