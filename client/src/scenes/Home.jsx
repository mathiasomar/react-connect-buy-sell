import { useEffect } from "react";
import Hero from "../sections/Hero";
import Discover from "../sections/Discover";

const Home = () => {
  useEffect(() => {
    document.title = "Connect Home";
  }, []);
  return (
    <>
      <Hero />
      <Discover />
    </>
  );
};

export default Home;
