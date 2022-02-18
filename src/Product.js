// import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import "./product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, price, title, image, rating }) {
  const [state, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        image: image,
        title: title,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>Rs </small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>

      <img className="product_img" src={image} alt="" />

      <button className="product_button" onClick={addToBasket}>
        Add to Basket
      </button>
    </div>
  );
}

export default Product;
