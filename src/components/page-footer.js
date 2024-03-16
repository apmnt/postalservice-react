import React from "react";
import { PageFooterHyperlink } from "./page-footer-hyperlink";

export const PageFooter = () => {
  const resourceList = [
    {
      path: "https://auth0.com/why-auth0/",
      label: "Placeholder 1",
    },
    {
      path: "https://auth0.com/docs/get-started",
      label: "Placeholder 2",
    },
    {
      path: "https://auth0.com/blog/developers/",
      label: "Placeholder 3",
    },
    {
      path: "https://auth0.com/contact-us",
      label: "Placeholder 4",
    },
  ];

  return (
    <footer className="page-footer">
      <div className="page-footer-grid">
        <div className="page-footer-grid__info">
          <div className="page-footer-info__message">
            <p className="page-footer-message__headline">
              <span>This sample application is brought to you by&nbsp;</span>
            </p>
            <p className="page-footer-message__description">
              <PageFooterHyperlink path="https://auth0.com/docs/quickstarts/">
                <span>
                  PlaceholderPlaceholderPlaceholderPlaceholderPlaceholder&nbsp;
                </span>
                <u>Placeholder</u>
              </PageFooterHyperlink>
            </p>
          </div>
          <div className="page-footer-info__button">
            <a
              id="create-account-button"
              className="button button--secondary"
              href="https://auth0.com/signup"
              target="_blank"
              rel="noreferrer noopener"
            >
              Create Free Auth0 Account
            </a>
          </div>
          <div className="page-footer-info__resource-list">
            {resourceList.map((resource) => (
              <div
                key={resource.path}
                className="page-footer-info__resource-list-item"
              >
                <PageFooterHyperlink path={resource.path}>
                  {resource.label}
                </PageFooterHyperlink>
              </div>
            ))}
          </div>
        </div>
        <div className="page-footer-grid__brand">
          <div className="page-footer-brand">
            <img
              className="page-footer-brand__logo"
              src="https://cdn.auth0.com/blog/hello-auth0/auth0-shield.svg"
              alt="Auth0"
              width="20"
              height="22.22"
            />
            <PageFooterHyperlink path="https://auth0.com/">
              placeholder
            </PageFooterHyperlink>
          </div>
        </div>
      </div>
    </footer>
  );
};
