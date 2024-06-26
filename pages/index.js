import Head from "next/head";
import HomePage from "../components/HomePage";
import Script from "next/script";
import Work from "./work";
import Contact from "./contact";
import WorkPage from "../components/WorkPage";
import About from "./about";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, []);
  return (
    <div className="p-0 m-0 bg-[#ffff] scroll-container">
      <Head>
        <title>Arun Patel - Portlfolio</title>
        <meta name="description" content="Arun Patel Portfolio" />
        <meta property="og:title" content="Arun Patel"></meta>
        <meta property="keywords" content="MERN STACK developer,React Native developer,Full Stack Web developer,Full Stack Android developer,Full Stack Engineer" ></meta>
        <meta property="og:description" content="MERN STACK developer & React Native developer || Full Stack Web developer || Full Stack Android developer || Full Stack Engineer"></meta>
        <meta property="og:image" content="https://arun-patel-portfolio.vercel.app/thumbnail_256.png"></meta>
        <meta property="og:url" content="https://arun-patel-portfolio.vercel.app"></meta>
        <link rel="icon" href="/ArunLogo.svg" />
        {/* <link href="https://fonts.googleapis.com" rel="preconnect" /> */}
        {/* <link href="https://fonts.gstatic.com" rel="preconnect" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Merriweather:300,300italic,400,400italic,700,700italic,900,900italic%7CMontserrat:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic%7COpen+Sans:300,300italic,400,400italic,600,600italic,700,700italic,800,800italic%7CVarela:400%7CPT+Serif:400,400italic,700,700italic%7CVarela+Round:400%7CManrope:regular,500,600,700&display=optional" media="all" />
        <link href="https://fonts.googleapis.com/css2?family=Mr+Dafoe&display=swap" rel="stylesheet" media="all" /> */}
      </Head>
      <Script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js" type="text/javascript"></Script>
      <HomePage />
      <WorkPage />
      <About />
      <Contact />
    </div>
  );
}
