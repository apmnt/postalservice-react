import React, { useState } from "react";

const MobileSearchButton = ({ onSearch }) => {
  const [showSearch, setShowSearch] = useState(false);

  const handleClick = () => {
    setShowSearch(!showSearch);
    if (onSearch) {
      onSearch();
    }
  };

  return (
    <div>
      <button onClick={handleClick}>
        <span
          style={{ fontSize: showSearch ? "56px" : "24px", color: "black" }}
        >
          {showSearch ? "\u2715" : "\u{1F50D}"}
        </span>
      </button>
    </div>
  );
};

export default MobileSearchButton;
