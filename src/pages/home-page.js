import React from "react";
// import { Auth0Features } from "../components/auth0-features";
import { PageLayout } from "../components/page-layout";
import { MercariListings } from "../components/mercari-listings";
import { FrilListings } from "../components/fril-listings";

export const HomePage = () => (
  <PageLayout>
    <MercariListings />
    <FrilListings />
  </PageLayout>
);
