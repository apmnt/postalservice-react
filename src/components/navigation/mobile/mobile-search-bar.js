import React from "react";

const MobileSearchBar = ({ onSearch, searchTerm }) => {
  const handleSearch = (event) => {
    if (event.key === "Enter") {
      console.log("searchTerm", searchTerm);
      onSearch(searchTerm);
    }
  };

  const handleChange = (event) => {
    console.log("searchTerm", event.target.value);
    searchTerm = event.target.value;
  };

  return (
    <div className="mobile-search-bar-container">
      <input
        type="text"
        className="mobile-search-bar"
        placeholder="Search for something..."
        value={searchTerm}
        onChange={handleChange}
        onKeyDown={handleSearch}
      />
    </div>
  );
};

export default MobileSearchBar;
