import React, { useState } from "react";
import { NavBar } from "./navigation/desktop/nav-bar";
import { MobileNavBar } from "./navigation/mobile/mobile-nav-bar";
import { PageFooter } from "./page-footer";
import Filters from "./filters";

export const PageLayout = ({ children, onSearch }) => {
  const [isSearchActive, setIsSearchActive] = useState(false);

  const handleSearchClick = (keyword) => {
    onSearch(keyword);
    setIsSearchActive(!isSearchActive);
  };

  return (
    <div className="page-layout">
      <NavBar />
      <MobileNavBar
        onSearch={handleSearchClick}
        isSearchActive={isSearchActive}
        setIsSearchActive={setIsSearchActive}
      />{" "}
      {isSearchActive && <Filters />}
      <div className="page-layout__content">{children}</div>
      <PageFooter />
    </div>
  );
};
