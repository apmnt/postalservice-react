import React, { useState } from "react";
import { PageLayout } from "../components/page-layout";
import SearchBar from "../components/search-bar";
import { BaseListings } from "../components/base-listings";

export const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("junya");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <PageLayout>
      <SearchBar onSearch={handleSearch} />
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
