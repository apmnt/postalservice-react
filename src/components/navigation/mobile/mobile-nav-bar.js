import React from "react";
import { MobileMenuToggleButton } from "./mobile-menu-toggle-button";
import { MobileNavBarBrand } from "./mobile-nav-bar-brand";
import { MobileNavBarButtons } from "./mobile-nav-bar-buttons";
import { MobileNavBarTabs } from "./mobile-nav-bar-tabs";
import MobileSearchButton from "./mobile-search-button";
import MobileSearchBar from "./mobile-search-bar";

const MobileMenuState = {
  CLOSED: "closed",
  OPEN: "open",
};

const MobileMenuIcon = {
  CLOSE: "close",
  MENU: "menu",
};

export const MobileNavBar = ({
  onSearch,
  isSearchActive,
  setIsSearchActive,
}) => {
  const [mobileMenuState, setMobileMenuState] = React.useState(
    MobileMenuState.CLOSED
  );
  const [mobileMenuIcon, setMobileMenuIcon] = React.useState(
    MobileMenuIcon.MENU
  );

  const isMobileMenuOpen = () => {
    return mobileMenuState === MobileMenuState.OPEN;
  };

  const closeMobileMenu = () => {
    document.body.classList.remove("mobile-scroll-lock");
    setMobileMenuState(MobileMenuState.CLOSED);
    setMobileMenuIcon(MobileMenuIcon.MENU);
  };

  const openMobileMenu = () => {
    document.body.classList.add("mobile-scroll-lock");
    setMobileMenuState(MobileMenuState.OPEN);
    setMobileMenuIcon(MobileMenuIcon.CLOSE);
  };

  const toggleMobileMenu = () => {
    if (isMobileMenuOpen()) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  };

  const handleSearchClick = () => {
    setIsSearchActive(!isSearchActive);
    if (isMobileMenuOpen()) {
      closeMobileMenu();
    }
  };

  return (
    <div className="mobile-nav-bar__container">
      <nav className="mobile-nav-bar">
        <>
          {isSearchActive && <MobileSearchBar onSearch={onSearch} />}

          {!isSearchActive && (
            <MobileNavBarBrand handleClick={closeMobileMenu} />
          )}

          <MobileSearchButton onSearch={handleSearchClick} />

          {!isSearchActive && (
            <MobileMenuToggleButton
              icon={mobileMenuIcon}
              handleClick={toggleMobileMenu}
            />
          )}

          {isMobileMenuOpen() && (
            <div className="mobile-nav-bar__menu">
              <MobileNavBarTabs handleClick={closeMobileMenu} />
              <MobileNavBarButtons />
            </div>
          )}
        </>
      </nav>
    </div>
  );
};
