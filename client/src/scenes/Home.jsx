import { useEffect } from "react";
import Hero from "../sections/Hero";
import Discover from "../sections/Discover";
import Listing from "../sections/Listing";
import Service from "../sections/Service";
import Classified from "../sections/Classified";
import Testimonials from "../sections/Testimonials";
import Subscribe from "../sections/Subscribe";
// import Features from "../sections/Features";
import CookieConsent from "react-cookie-consent";
import Advert from "../sections/Advert";
import About from "../sections/About";
import Membership from "../sections/Membership";

const Home = () => {
  useEffect(() => {
    document.title = "Connect Home";
  }, []);
  return (
    <>
      <Hero />
      <Advert />
      <Discover />
      {/* <Features /> */}
      <Listing />
      <About />
      <Service />
      <Classified />
      <Membership />
      <Testimonials />
      <Subscribe />

      <CookieConsent debug={true} buttonText="Accept">
        This site uses cookies.
      </CookieConsent>
    </>
  );
};

export default Home;
