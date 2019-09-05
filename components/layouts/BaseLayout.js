import React from "react";
import Header from "../shared/Header";
import Head from "next/head";

const BaseLayout = props => {
  const {
    className,
    children,
    isAuthenticated,
    user,
    isSiteOwner,
    title,
    cannonical
  } = props;
  const headerType = props.headerType || "default";

  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Matt Edens (aka Mathias Tiberius) is a professional Idaho-based freelance web developer specializing in JavaScript/React web application and WordPress CMS development."
        ></meta>
        <meta
          name="keywords"
          content="matt edens, web developer, freelancing, epoch web solutions"
        ></meta>
        <meta
          property="og:title"
          content="Matt Edens: freelance web developer and master of the mystical arts"
        ></meta>
        <meta property="og:locale" content="en_US"></meta>
        <meta property="og:url" content={`${process.env.BASE_URL}`}></meta>
        <meta property="og:type" content="website"></meta>
        <meta
          property="og:description"
          content="Matt Edens (aka Mathias Tiberius) is a professional Idaho-based freelance web developer specializing in JavaScript/React web application and WordPress CMS development"
        ></meta>
        {cannonical && (
          <link
            rel="cannonical"
            href={`${process.env.BASE_URL}${cannonical}`}
          />
        )}

        <link rel="icon" type="image/ico" href="/static/favicon.ico" />
        <script src="https://kit.fontawesome.com/7630047623.js" />
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
