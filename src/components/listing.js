import React from "react";

export const Listing = ({ title, price, size, pictureUrl, url }) => (
  <div className="listing">
    <img className="listing__picture" src={pictureUrl} alt={title} />
    <div className="listing__text">
      <a href={url} className="listing__title">
        {title}
      </a>
      <p className="listing__size">{size}</p>
      <p className="listing__price">{price}</p>
    </div>
  </div>
);
