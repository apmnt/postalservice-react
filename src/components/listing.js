import React from "react";

export const Listing = ({ title, price, size, pictureUrl, url }) => (
  <div className="listing">
    <img className="listing__picture" src={pictureUrl} alt={title} />
    <div className="listing__text">
      <p className="listing__title">{title}</p>
      <p className="listing__size">{size}</p>
      <p className="listing__price">{price}</p>
    </div>
  </div>
);
