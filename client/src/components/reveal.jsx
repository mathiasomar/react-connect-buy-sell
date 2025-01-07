import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";
import { twMerge } from "tailwind-merge";

const Reveal = ({ children, key, className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  return (
    <motion.div
      className={twMerge("w-full h-auto", className)}
      key={key}
      ref={ref}
      variants={{
        hidden: {
          y: 100,
          opacity: 0,
        },
        visible: {
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.85,
          },
        },
      }}
      initial="hidden"
      animate={mainControls}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
