import Header from "../components/Header";
import "../styles/globals.css";
import AppContext from "./AppContext";
import { ParallaxProvider } from "react-scroll-parallax";

function MyApp({ Component, pageProps }) {
  return (
    <AppContext>
      <ParallaxProvider>
        <Header />
        <Component {...pageProps} />
      </ParallaxProvider>
    </AppContext>
  );
}

export default MyApp;
