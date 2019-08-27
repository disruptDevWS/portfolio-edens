import React from "react";
import Header from "../shared/Header";
import Head from "next/head";

const BaseLayout = props => {
  const { className, children, isAuthenticated, user, isSiteOwner } = props;
  const headerType = props.headerType || "default";

  return (
    <React.Fragment>
      <Head>
        <title>Matt Edens: Web Developer</title>
        <script src="https://kit.fontawesome.com/7630047623.js" />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Head>
      <div className="layout-container">
        <Header
          className={`port-nav-${headerType}`}
          isAuthenticated={isAuthenticated}
          user={user}
          isSiteOwner={isSiteOwner}
        />
        <main className={`cover ${className}`}>
          <div className="wrapper">{children}</div>
        </main>
      </div>
    </React.Fragment>
  );
};

export default BaseLayout;
