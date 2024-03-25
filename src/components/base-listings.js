import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Listing } from "./listing";
import LoadMoreButton from "./buttons/load-more-button";
import { PageLoader } from "./page-loader";

export const BaseListings = ({
  site,
  title,
  searchParams,
  initialVisibleCount = 40,
  loadMoreStep = 40,
}) => {
  const [listings, setListings] = useState([]);
  const [visibleCount, setVisibleCount] = useState(initialVisibleCount);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [reachedEnd, setReachedEnd] = useState(false);

  const fetchMoreProducts = async (page) => {
    let keyword = "";
    if (searchParams && searchParams.keyword) {
      keyword = searchParams.keyword;
    }
    let size = "";
    if (searchParams && searchParams.sizes && searchParams.sizes.length > 0) {
      size =
        searchParams.sizes.length === 1
          ? searchParams.sizes[0]
          : searchParams.sizes.join(",");
    }
    console.log("fetchMoreProducts", page, site, keyword, size, loadMoreStep);
    if (reachedEnd) {
      return;
    }
    try {
      let url = `https://postalservice-flask-api.vercel.app/?site=${site}&page=${page}`;

      if (keyword) {
        url += `&keyword=${keyword}`;
      }

      if (size) {
        url += `&size=${size}`;
      }
      setLoading(true);
      const response = await axios.get(url);
      setListings((prevListings) => [...prevListings, ...response.data]);
      if (response.data.length < loadMoreStep) {
        setReachedEnd(true);
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching more products:", error);
      setLoading(false);
    }
  };

  const loadMore = useCallback(() => {
    fetchMoreProducts(page);
    setPage(page + 1);
    setVisibleCount(visibleCount + loadMoreStep);
    console.log(
      "page",
      page,
      "listings",
      listings.length,
      "visibleCount",
      visibleCount
    );
  }, [visibleCount, listings.length, page, fetchMoreProducts, loadMoreStep]);

  useEffect(() => {
    const fetchInitialProducts = async () => {
      let currentPage = 1;
      await fetchMoreProducts(currentPage);
      currentPage++;
      await fetchMoreProducts(currentPage);
      setPage(page + 2);
    };
    fetchInitialProducts();
  }, []);

  return (
    <div className="listings">
      <h4 className="listings__title">{title}</h4>
      <div className="listings__grid">
        {listings.slice(0, visibleCount).map((listing, index) => (
          <Listing
            key={index}
            title={listing.title}
            price={Number(listing.price).toLocaleString("en-US", {
              style: "currency",
              currency: "JPY",
            })}
            size={listing.size || "-"}
            pictureUrl={listing.img}
            url={listing.url}
          />
        ))}
      </div>
      {loading && <PageLoader />}
      {!loading && !reachedEnd && (
        <LoadMoreButton
          className="listings__load-more"
          visibleCount={visibleCount}
          listingsLength={listings.length}
          loadMore={loadMore}
        />
      )}
      <hr className="listings__line" />
    </div>
  );
};
