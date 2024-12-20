import { useRef } from "react";
import Section from "../components/section";
import Title from "../components/title";
import { useScroll, useTransform, motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { discCategory } from "../constants";

const Features = () => {
  return (
    <Section>
      <Title topText="Check out our features" bottomText="Features" />
      <div className="my-10"></div>

      {discCategory.map(
        ({ id, name, subText, img, path, addText, description }) => (
          <TextParallaxContent
            key={id}
            imgUrl={img}
            subheading={name}
            heading={subText}
          >
            <ExampleContent
              path={path}
              add={addText}
              description={description}
            />
          </TextParallaxContent>
        )
      )}
    </Section>
  );
};

const IMG_PADDING = 12;

const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
        {subheading}
      </p>
      <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
    </motion.div>
  );
};

const ExampleContent = ({ path, add, description }) => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4">{add}</h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-neutral md:text-2xl">{description}</p>
      <a
        href={path}
        className="w-full rounded bg-bgAccent px-9 py-4 text-xl font-semibold text-textAccent transition-colors hover:bg-neutral hover:text-secondary md:w-fit"
      >
        Learn more <FiArrowUpRight className="inline" />
      </a>
    </div>
  </div>
);

export default Features;
