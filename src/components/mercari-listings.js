import React, { useState, useEffect } from "react";
import axios from "axios";
import { Listing } from "./listing";
import LoadMoreButton from "./buttons/load-more-button";

export const MercariListings = () => {
  const [listings, setListings] = useState([]);
  const [visibleCount, setVisibleCount] = useState(12);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await axios.get(
          "https://postalservice-flask-api.vercel.app/?site=mercari&keyword=junya&size=XL"
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
      <h2 className="listings__title">Mercari Listings</h2>
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
      <LoadMoreButton
        visibleCount={visibleCount}
        listingsLength={listings.length}
        loadMore={loadMore}
      />
    </div>
  );
};
