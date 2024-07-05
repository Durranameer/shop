import React, { useState, useEffect } from "react";
import axios from "axios";
import "./shop.css";
import { Link, useNavigate } from "react-router-dom";
import { CartItem } from "./CartItem";

const Shop = ({ addToCart }) => {
  const [products, setProducts] = useState([]); //holds the List of prodects
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products") //sent a get request to the this url
      .then((response) => {
        //the response object
        setProducts(response.data.products);
      })
      .catch((error) => console.error("Error fetching products:", error)); //a method to handle rejection if the request falls
  }, []);

  const handle = (id) => {
    navigate(`/products/${id}`);
  };
  return (
    <div className="shop">
      <div className="product-list">
        {products.length > 0 ? ( //checks if the array is empty
          products.map(
            (
              product //go throw the prodects array
            ) => (
              <CartItem product={product} addToCart={addToCart} removeFromCart={removeFromCart} handle={handle}/>
            )
          )
        ) : (
          //if not it will display loading
          <p>Loading products...</p>
        )}
      </div>
    </div>
  );
};

export default Shop;
