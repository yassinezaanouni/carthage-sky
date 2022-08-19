import Layout from "../components/Layout/Layout";
import "../styles/globals.css";
import "../styles/nprogress.css";
import "animate.css/animate.min.css";
import nProgress from "nprogress";
import { Router } from "next/router";
import { ParallaxProvider } from "react-scroll-parallax";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  Router.events.on("routeChangeStart", nProgress.start);
  Router.events.on("routeChangeError ", nProgress.done);
  Router.events.on("routeChangeComplete", nProgress.done);
  return (
    <>
      <Head>
        <title>Cartaghe Sky </title>
        <meta
          name="description"
          content="We're here to make your experience owning, operating and managing an aircraft easier. We take care of the process and deliver cost-effective service so you can enjoy the benefits. You can expect full service for a smooth journey."
        />
        <link rel="icon" href="/icons/logo.svg" />
      </Head>
      x
      <ParallaxProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ParallaxProvider>
    </>
  );
}

export default MyApp;
