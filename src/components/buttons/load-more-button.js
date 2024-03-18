import React from "react";

const LoadMoreButton = ({ visibleCount, listingsLength, loadMore }) => {
  return (
    <button
      onClick={loadMore}
      style={{
        display: "block",
        margin: "2rem auto 0 auto",
        paddingLeft: "0",
        outline: "none",
        fontSize: "2.6rem",
        fontStyle: "italic",
        backgroundColor: "transparent",
        border: "none",
      }}
    >
      Show more
    </button>
  );
};

export default LoadMoreButton;
