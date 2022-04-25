import React from "react";
import { Link } from "react-router-dom";

function Card({ item, handleClick }) {
  const { id, title, image, price, description } = item;

  return (
    <div className="cards">
      <div className="image_box">
        <Link to={"/item/" + item._id}>
          <img src={image} alt="image1" />
        </Link>
      </div>
      <div className="details">
        <Link to={"/item/" + item._id}>
          <p> {title} </p>
        </Link>
        <p>Price - {price}$</p>

        <button className="btn card-btn" onClick={() => handleClick(item)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Card;
