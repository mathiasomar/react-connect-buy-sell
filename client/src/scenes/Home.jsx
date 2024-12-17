import { useEffect } from "react";
import Title from "../components/title";

const Home = () => {
  useEffect(() => {
    document.title = "Connect Home";
  }, []);
  return (
    <div>
      <Title
        topText="Your Free classifieds site"
        bottomText="The most powerful
search engine on the market"
      />
    </div>
  );
};

export default Home;
