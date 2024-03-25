import React, { useState } from "react";
import { PageLayout } from "../components/page-layout";
import SearchBar from "../components/search-bar";
import { BaseListings } from "../components/base-listings";
import RefineView from "../components/refine-view";

export const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchParams, setSearchParams] = useState({
    keyword: searchTerm,
    size: null,
  });
  const [isRefineVisible, setIsRefineVisible] = useState(false);

  const handleSearch = (term) => {
    console.log("handled seearch in homepage", term);
    setSearchTerm(term);
    setSearchParams((prevParams) => ({ ...prevParams, keyword: term }));
  };

  const handleRefineClick = () => {
    console.log("handle refine click");
    setIsRefineVisible(!isRefineVisible);
  };

  const handleCancelClick = () => {
    setIsRefineVisible(false);
  };

  const handleApplyFilters = (appliedFilters) => {
    // add search term to applied filters
    appliedFilters.keyword = searchTerm;
    setSearchParams(appliedFilters);
  };

  const getNumberOfSelectedFilters = () => {
    const { keyword, ...otherFilters } = searchParams;
    const filterValues = Object.values(otherFilters)
      .flat()
      .filter((value) => value !== null && value !== "");
    return filterValues.length;
  };

  return (
    <div>
      {isRefineVisible ? (
        <RefineView
          handleCancelClick={handleCancelClick}
          onApplyFilters={handleApplyFilters}
          appliedFilters={searchParams}
        />
      ) : (
        <PageLayout onSearch={handleSearch}>
          <div
            className="search-tools-container"
            style={{ display: "flex", flexDirection: "row" }}
          >
            <SearchBar onSearch={handleSearch} />
            <button className="refine-button" onClick={handleRefineClick}>
              REFINE{" "}
              {getNumberOfSelectedFilters() > 0 &&
                `(${getNumberOfSelectedFilters()})`}
            </button>{" "}
          </div>
          <h6 className="search-results-for">
            Search results for: {searchTerm}
          </h6>
          <BaseListings
            key={`mercari-${searchTerm}`}
            site="mercari"
            searchParams={searchParams}
            title="Mercari Listings"
          />
          <BaseListings
            key={`fril-${searchTerm}`}
            site="fril"
            title="Fril Listings"
            initialVisibleCount={36}
            loadMoreStep={36}
          />
        </PageLayout>
      )}
    </div>
  );
};
