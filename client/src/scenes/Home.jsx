import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "Connect Home";
  }, []);
  return <div></div>;
};

export default Home;
