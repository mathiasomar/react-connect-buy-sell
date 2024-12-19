import { AiOutlineArrowRight } from "react-icons/ai";
import { Suspense } from "react";
import Container from "../components/Container";
import Section from "../components/section";
import Title from "./../components/title";
import { discCategory } from "../constants";
import Button from "../components/button";
import { motion } from "framer-motion";

// const containerVariant = {
//   hidden: {
//     opacity: 0,
//     y: 100,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 2,
//       staggerChildren: 0.5,
//       childrenDelay: 0.2,
//     },
//   },
// };

const Discover = () => {
  return (
    <Section>
      <Title topText="Featured categories" bottomText="Discover more" />

      <Container className="mt-14">
        <motion.div
          initial={{ y: 48, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.75 }}
          className="w-full grid grid-cols-4 gap-10"
        >
          {discCategory.map(({ id, name, img, path }) => (
            <motion.a
              initial={{ y: 48, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.75 }}
              key={id}
              href={path}
              className="col-span-1 bg-white border border-bgAccent rounded-md aspect-square w-full cursor-pointer pb-1"
            >
              <div className="relative w-full h-[300px] group overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50px] h-[50px] rounded-full bg-accent text-textAccent flex items-center justify-center z-10 transition-opacity opacity-0 group-hover:opacity-[1]">
                  <AiOutlineArrowRight />
                </div>

                <Suspense fallback="">
                  <img
                    src={img}
                    loading="lazy"
                    alt=""
                    className="w-full h-[300px] duration-500 group-hover:scale-[1.2]"
                  />
                </Suspense>
              </div>
              <div className="full py-4 h-[80px] px-[15px] flex items-center justify-center text-center overflow-hidden bg-secondary text-textAccent font-[800] text-base">
                {name}
              </div>
            </motion.a>
          ))}
          <motion.a
            initial={{ y: 48, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.75 }}
            href="/more"
            className="col-span-1 relative z-20 rounded-md aspect-square w-full cursor-pointer pb-1 h-[380px] overflow-hidden bg-[url('images/home_category.jpeg')] bg-cover bg-center flex items-center gap-10 justify-center flex-col px-4"
          >
            <div className="absolute -z-10 w-full h-full top-0 left-0 bg-overlay opacity-[0.85]"></div>
            <div className="text-center text-secondary text-xl font-[800]">
              Didn&apos;t find the category you&apos;re looking for?
            </div>
            <Button type="one">
              <span className="capitalize">view all</span>
              <span className="ml-4">
                <AiOutlineArrowRight />
              </span>
            </Button>
          </motion.a>
        </motion.div>
      </Container>
    </Section>
  );
};

export default Discover;
