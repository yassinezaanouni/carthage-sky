import "animate.css/animate.min.css";
import Head from "next/head";
import { Router } from "next/router";
import nProgress from "nprogress";
import { Toaster } from "react-hot-toast";
import { ParallaxProvider } from "react-scroll-parallax";
import Layout from "../components/Layout/Layout";
import "../styles/globals.css";
import "../styles/nprogress.css";

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
      <ParallaxProvider>
        <Layout>
          <Toaster
            position="top-center"
            reverseOrder={false}
            toastOptions={{
              // Define default options
              className: "",
              duration: 2500,
              style: {
                background: "#fff",
                color: "#000",
              },
            }}
          />
          <Component {...pageProps} />
        </Layout>
      </ParallaxProvider>
    </>
  );
}

export default MyApp;
