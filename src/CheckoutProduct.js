import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";
function CheckoutProduct({ image, price, rating, title }) {
  const [{ basket }, dispatch] = useStateValue();
  const removefromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      title: title,
    });
  };

  return (
    <div className="CheckoutProduct">
      <img className="CheckoutProduct_img" src={image} alt="" />
      <div className="CheckoutProduct_info">
        <p className="CheckoutProduct_title">{title}</p>
        <p className="CheckoutProduct_price">
          <small>Rs </small>
          <strong>{price}</strong>
        </p>
        <div className="CheckoutProduct_Rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <button onClick={removefromBasket}>Remove from Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
