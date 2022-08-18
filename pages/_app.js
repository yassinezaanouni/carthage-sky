import Layout from "../components/Layout/Layout";
import "../styles/globals.css";
import "../styles/nprogress.css";
import "animate.css/animate.min.css";
import nProgress from "nprogress";
import { Router } from "next/router";
import { ParallaxProvider } from "react-scroll-parallax";

function MyApp({ Component, pageProps }) {
  Router.events.on("routeChangeStart", nProgress.start);
  Router.events.on("routeChangeError ", nProgress.done);
  Router.events.on("routeChangeComplete", nProgress.done);
  return (
    <ParallaxProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ParallaxProvider>
  );
}

export default MyApp;
