import React, { useState } from "react";
import { PageLayout } from "../components/page-layout";
import SearchBar from "../components/search-bar";
import { BaseListings } from "../components/base-listings";

export const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState(""); // Add search state

  const handleSearch = (term) => {
    console.log("handled seearch in homepage", term);
    setSearchTerm(term);
  };

  return (
    <PageLayout onSearch={handleSearch}>
      <SearchBar onSearch={handleSearch} />
      <h6>Search Results for: {searchTerm}</h6>
      <BaseListings
        key={`mercari-${searchTerm}`}
        site="mercari"
        keyword={searchTerm}
        size="XL"
        title="Mercari Listings"
      />
      <BaseListings
        key={`fril-${searchTerm}`}
        site="fril"
        keyword={searchTerm}
        size="XL"
        title="Fril Listings"
        initialVisibleCount={36}
        loadMoreStep={36}
      />
    </PageLayout>
  );
};
