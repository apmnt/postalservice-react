import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    if (event.key === "Enter") {
      console.log("searchTerm", searchTerm);
      onSearch(searchTerm);
      setSearchTerm("");
    }
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        className="search-bar"
        placeholder="search for something..."
        value={searchTerm}
        onChange={handleChange}
        onKeyDown={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
