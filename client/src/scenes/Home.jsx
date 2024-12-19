import { useEffect } from "react";
import Hero from "../sections/Hero";
// import Discover from "../sections/Discover";
import Features from "../sections/Features";

const Home = () => {
  useEffect(() => {
    document.title = "Connect Home";
  }, []);
  return (
    <>
      <Hero />
      {/* <Discover /> */}
      <Features />
    </>
  );
};

export default Home;
