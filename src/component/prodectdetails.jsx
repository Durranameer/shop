import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./prodectdetails.css";

const prodectdetails = () => {
  const { id } = useParams(); // gives access to multiple contents in the same url path.
  const [product, setProdect] = useState({});
  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`) //sent a get request to the this url
      .then((response) => {
        //the response object
        setProdect(response.data);
        // console.log(response.data);
      })
      .catch((error) => console.error("Error fetching products:", error)); //a method to handle rejection if the request falls
  }, []);
       
  return (
    <div className="prodect-list">
      <h1>{product?.title}</h1>
      <div className="product-style">
        {/* {
                    product && <>
                     
                    </>
                } */}
        <img
          src={product?.thumbnail}
          alt={product.title}
         id="thumbnail"
        />
        <p>${product.price}</p> 
        <p>{product?.description}</p>
      </div>
    </div>
  );
};

export default prodectdetails;
