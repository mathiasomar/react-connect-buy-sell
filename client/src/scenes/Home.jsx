import { useEffect } from "react";
import Hero from "../sections/Hero";

const Home = () => {
  useEffect(() => {
    document.title = "Connect Home";
  }, []);
  return (
    <>
      <Hero />
    </>
  );
};

export default Home;
