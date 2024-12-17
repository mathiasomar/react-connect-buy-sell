import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    document.title = "Connect About";
  }, []);
  return <div>About</div>;
};

export default About;
