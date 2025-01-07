import { BiCircle } from "react-icons/bi";
import { FaAngleRight } from "react-icons/fa";
import Container from "../components/Container";
import Section from "../components/section";
import Title from "../components/title";
import { motion } from "framer-motion";

const container = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
      delayChildren: 0.5,
    },
  },
};

const Service = () => {
  return (
    <Section>
      <Title
        topText="Your Free classifieds site"
        bottomText="The most powerful
search engine on the market"
      />

      <Container className="mt-[4rem]">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          className="flex items-center justify-center gap-[15px]"
        >
          <motion.div
            variants={container}
            className="relative flex flex-col items-center min-w-[360px]"
          >
            <div className="absolute top-[92px] right-[-12.5px]">
              <FaAngleRight
                className="text-primary"
                style={{ fontSize: "45px" }}
              />
            </div>
            <div className="flex items-center justify-center">
              <img
                src="images/default_services_1.png"
                className="w-[60px] h-[60px]"
                alt=""
              />
            </div>
            <div className="mt-[30px] w-[30px] h-[30px] relative">
              <BiCircle className="text-primary" style={{ fontSize: "45px" }} />
            </div>
            <div className="mt-[30px] text-textAccent text-center max-w-[260px] font-[800] leading-[24px] -tracking-[1px] text-2xl">
              Search anything you are looking for
            </div>
            <div className="mt-[20px] text-fadeText text-center max-w-[260px] text-base font-[400] leading-[29px] tracking-0">
              Pellentesque at urna non laoreet. Aenean euismod, et laoreet
              luctus, justo ligula libero felis.
            </div>
          </motion.div>
          <motion.div
            variants={container}
            className="relative flex flex-col items-center min-w-[360px]"
          >
            <div className="absolute top-[92px] right-[-12.5px]">
              <FaAngleRight
                className="text-primary"
                style={{ fontSize: "45px" }}
              />
            </div>
            <div className="flex items-center justify-center">
              <img
                src="images/contact_address-1.png"
                className="w-[60px] h-[60px]"
                alt=""
              />
            </div>
            <div className="mt-[30px] w-[30px] h-[30px] relative">
              <BiCircle className="text-primary" style={{ fontSize: "45px" }} />
            </div>
            <div className="mt-[30px] text-textAccent text-center max-w-[260px] font-[800] leading-[24px] -tracking-[1px] text-2xl">
              Find your listings with precise location
            </div>
            <div className="mt-[20px] text-fadeText text-center max-w-[260px] text-base font-[400] leading-[29px] tracking-0">
              Pellentesque at urna non laoreet. Aenean euismod, et laoreet
              luctus, justo ligula libero felis.
            </div>
          </motion.div>
          <motion.div
            variants={container}
            className="relative flex flex-col items-center min-w-[360px]"
          >
            <div className="absolute top-[92px] right-[-12.5px] hidden">
              <FaAngleRight
                className="text-primary"
                style={{ fontSize: "45px" }}
              />
            </div>
            <div className="flex items-center justify-center">
              <img
                src="images/default_services_3.png"
                className="w-[60px] h-[60px]"
                alt=""
              />
            </div>
            <div className="mt-[30px] w-[30px] h-[30px] relative">
              <BiCircle className="text-primary" style={{ fontSize: "45px" }} />
            </div>
            <div className="mt-[30px] text-textAccent text-center max-w-[260px] font-[800] leading-[24px] -tracking-[1px] text-2xl">
              Explore the best available listing
            </div>
            <div className="mt-[20px] text-fadeText text-center max-w-[260px] text-base font-[400] leading-[29px] tracking-0">
              Pellentesque at urna non laoreet. Aenean euismod, et laoreet
              luctus, justo ligula libero felis.
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
};

export default Service;
