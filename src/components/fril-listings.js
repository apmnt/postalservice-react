import React from "react";
import { BaseListings } from "./base-listings";

export const FrilListings = () => {
  return (
    <BaseListings
      site="fril"
      keyword="junya"
      size="XL"
      title="Fril Listings"
      initialVisibleCount={36}
      loadMoreStep={36}
    />
  );
};
