import React, { useState, useEffect } from "react";
import axios from "axios";
import { Listing } from "./listing";

export const FrilListings = () => {
  const [listings, setListings] = useState([]);
  const [visibleCount, setVisibleCount] = useState(12);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await axios.get(
          "https://postalservice-flask-api.vercel.app/?site=fril&keyword=yohji&size=M"
        );
        setListings(response.data);
      } catch (error) {
        console.error("Failed to fetch listings:", error);
      }
    };

    fetchListings();
  }, []);

  const loadMore = () => {
    setVisibleCount(visibleCount + 12);
  };

  return (
    <div className="listings">
      <h2 className="listings__title">Fril Listings</h2>
      <div className="listings__grid">
        {listings.slice(0, visibleCount).map((listing, index) => (
          <Listing
            key={index}
            title={listing.title}
            price={Number(listing.price).toLocaleString("en-US", {
              style: "currency",
              currency: "JPY",
            })}
            size={listing.size}
            pictureUrl={listing.img}
            url={listing.url}
          />
        ))}
      </div>
      {visibleCount < listings.length && (
        <button onClick={loadMore}>Load more</button>
      )}
    </div>
  );
};
