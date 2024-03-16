// LoadMoreButton.js
import React from "react";

const LoadMoreButton = ({ visibleCount, listingsLength, loadMore }) => {
  if (visibleCount < listingsLength) {
    return (
      <button
        onClick={loadMore}
        style={{
          marginTop: "2rem",
          marginLeft: "0",
          paddingLeft: "0",
          outline: "none",
          fontSize: "2.2rem",
          fontStyle: "italic",
          backgroundColor: "transparent",
          border: "none",
        }}
      >
        Load more
      </button>
    );
  }

  return null;
};

export default LoadMoreButton;
