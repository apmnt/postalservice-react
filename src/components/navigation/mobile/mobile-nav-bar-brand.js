import React, { useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";

export const MobileNavBarBrand = ({ handleClick }) => {
  const titleRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        // replace 100 with the amount of scrolling you want
        titleRef.current.classList.add("small");
      } else {
        titleRef.current.classList.remove("small");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div onClick={handleClick} className="mobile-nav-bar__brand">
      <NavLink to="/">
        <h1 ref={titleRef} className="nav-bar__title-mobile">
          Postal Service
        </h1>
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
