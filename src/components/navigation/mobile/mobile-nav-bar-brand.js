import React from "react";
import { NavLink } from "react-router-dom";

export const MobileNavBarBrand = ({ handleClick }) => {
  return (
    <div onClick={handleClick} className="mobile-nav-bar__brand">
      <NavLink to="/">
        <h1 className="nav-bar__title">Postal Service</h1>
        {/* <img
          className="mobile-nav-bar__logo"
          src="https://cdn.auth0.com/blog/hub/code-samples/hello-world/auth0-logo.svg"
          alt="Auth0 shield logo"
          width="82"
          height="24"
        /> */}
      </NavLink>
    </div>
  );
};
