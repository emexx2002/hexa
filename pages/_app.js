import React from "react";
import ReactDOM from "react-dom";
import App from "next/app";
import Head from "next/head";
import Router from "next/router";

import PageChange from "components/PageChange/PageChange.js";

import "styles/scss/nextjs-material-kit.scss?v=1.2.0";
import "styles/css/index.css"
import "animate.css/animate.min.css";


export default class MyApp extends App {

  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <title>Blue orb</title>
        </Head>
        <Component {...pageProps} />
      </React.Fragment>
    );
  }
}
