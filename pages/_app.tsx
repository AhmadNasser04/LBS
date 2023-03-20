import React, { useEffect, useState } from "react";
import { Layout } from "../components";
import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

function getInitialProps() {
  return {};
}

MyApp.getInitialProps = getInitialProps;

export default MyApp;
