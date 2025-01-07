import { useEffect, useRef } from "react";
import Container from "../components/Container";
import Section from "../components/section";
import Button from "../components/button";
import {
  motion,
  useInView,
  useAnimation,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["18.5deg", "-18.5deg"]
  );

  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-18.5deg", "18.5deg"]
  );

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  return (
    <Section>
      <Container className="p-[75px] rounded-2xl bg-[url('images/media/group-343641717336658.png')] bg-cover bg-no-repeat">
        <div className="grid grid-cols-12 my-0 mx-[1.5rem]">
          <div className="md:col-span-6 px-[1.5rem]">
            <div className="block">
              <div className="mb-[80px]">
                <motion.h1
                  ref={ref}
                  variants={{
                    hidden: {
                      y: 50,
                      opacity: 0,
                    },
                    visible: {
                      y: 0,
                      opacity: 1,
                      transition: {
                        duration: 1,
                      },
                    },
                  }}
                  initial="hidden"
                  animate={mainControls}
                  className="text-5xl text-neutral font-bold tracking-wide"
                >
                  Earn cash by selling or Find anything you desire
                </motion.h1>
                <motion.p
                  ref={ref}
                  variants={{
                    hidden: {
                      y: 50,
                      opacity: 0,
                    },
                    visible: {
                      y: 0,
                      opacity: 1,
                      transition: {
                        duration: 1,
                        delay: 0.5,
                      },
                    },
                  }}
                  initial="hidden"
                  animate={mainControls}
                  className="text-base text-overlay mt-[16px]"
                >
                  Earn cash by selling your pre-loved or new items on our
                  platform or you can find anything on our platform you desire.
                </motion.p>
              </div>

              <div className="w-full">
                <a href="/post" className="mr-[15px]">
                  <Button type="one">Post Your Ads</Button>
                </a>
                <a href="/listing" className="mr-[15px]">
                  <Button type="two">Browse Ads</Button>
                </a>
              </div>
            </div>
          </div>
          <div className="md:col-span-6 px-[1.5rem]">
            <motion.div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              ref={ref}
              variants={{
                hidden: {
                  x: 50,
                  opacity: 0,
                },
                visible: {
                  x: 0,
                  opacity: 1,
                  transition: {
                    duration: 1,
                    delay: 0.5,
                  },
                },
              }}
              initial="hidden"
              animate={mainControls}
              className="relative w-full h-[70vh] bg-bgAccent rounded-xl"
            >
              <div
                className="absolute inset-4 bg-white py-2 rounded-xl overflow-hidden"
                style={{
                  transform: "translateZ(75px)",
                  transformStyle: "preserve-3d",
                }}
              >
                <img
                  src="images/media/about11713418479.png"
                  alt="no image"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default About;
