import { useEffect } from "react";
import Section from "../components/section";
import PageHeader from "../components/pageHeader";
import Container from "../components/Container";
import Button from "../components/button";
import { motion } from "framer-motion";
import Team from "../components/team";

const About = () => {
  useEffect(() => {
    document.title = "Connect | About Us";
  }, []);
  return (
    <>
      <Section className="min-h-screen">
        <Container>
          <PageHeader page="About Us" />
        </Container>

        <Container className="py-[50px]">
          <div className="grid grid-cols-12 place-content-between place-items-center">
            <div className="xl:col-span-7 lg:col-span-5 md:col-span-12">
              <div className="relative z-0 mb-[50px]">
                <motion.h1
                  variants={{
                    hidden: {
                      y: 70,
                      opacity: 0,
                    },
                    visible: {
                      y: 0,
                      opacity: 1,
                      transition: {
                        duration: 1.2,
                      },
                    },
                  }}
                  initial="hidden"
                  animate="visible"
                  className="font-bold mb-[29px] text-dark leading-[1.3] text-7xl"
                >
                  We make buying-selling online easier
                </motion.h1>
                <motion.p
                  variants={{
                    hidden: {
                      y: 70,
                      opacity: 0,
                    },
                    visible: {
                      y: 0,
                      opacity: 1,
                      transition: {
                        duration: 1.2,
                        delay: 0.8,
                      },
                    },
                  }}
                  initial="hidden"
                  animate="visible"
                  className="text-xl font-[400] mb-[42px] text-fadeText"
                >
                  Discover Seamless Online Buying and Selling Experiences with
                </motion.p>
                <motion.div
                  variants={{
                    hidden: {
                      y: -20,
                      x: -70,
                      opacity: 0,
                    },
                    visible: {
                      y: 0,
                      x: 0,
                      opacity: 1,
                      transition: {
                        duration: 1.2,
                      },
                    },
                  }}
                  initial="hidden"
                  animate="visible"
                  className="w-full"
                >
                  <a href="/post" className="mr-[15px]">
                    <Button type="one">Post Your Ads</Button>
                  </a>
                  <a href="/listing" className="mr-[15px]">
                    <Button type="two">Browse Ads</Button>
                  </a>
                </motion.div>
              </div>
              <div className="grid grid-cols-3">
                <div className="col-span-1 relative z-1 px-[10px] mb-[24px] before:content-[''] before:absolute before:w-[2px] before:h-[95%] before:bg-bgAccent before:bottom-0 before:-right-[-2%] before:top-[1%] before:box-border">
                  <div className="mb-0 flex items-center">
                    <span className="text-dark text-4xl font-semibold leading-[1] mb-[12px] inline-block uppercase">
                      4.5
                    </span>
                    <p className="text-dark text-4xl font-semibold leading-[1] mb-[12px] inline-block">
                      +
                    </p>
                  </div>
                  <div className="text-base text-dark">Years in Industry</div>
                </div>
                <div className="col-span-1 relative z-1 px-[10px] mb-[24px] before:content-[''] before:absolute before:w-[2px] before:h-[95%] before:bg-bgAccent before:bottom-0 before:-right-[-2%] before:top-[1%] before:box-border">
                  <div className="mb-0 flex items-center">
                    <span className="text-dark text-4xl font-semibold leading-[1] mb-[12px] inline-block uppercase">
                      13,000
                    </span>
                    <p className="text-dark text-4xl font-semibold leading-[1] mb-[12px] inline-block">
                      +
                    </p>
                  </div>
                  <div className="text-base text-dark">Employee working</div>
                </div>
                <div className="col-span-1 relative z-1 px-[10px] mb-[24px]">
                  <div className="mb-0 flex items-center">
                    <span className="text-dark text-4xl font-semibold leading-[1] mb-[12px] inline-block uppercase">
                      20K
                    </span>
                  </div>
                  <div className="text-base text-dark">
                    Active registered users
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:col-span-5 lg:col-span-7">
              <div className="w-full relative z-0">
                <img
                  src="images/media/about-hero1714903203.png"
                  alt=""
                  className="w-full object-cover block h-auto align-middle"
                />
              </div>
            </div>
          </div>
        </Container>

        <div className="py-[50px]">
          <div className="bg-pageBg">
            <Container>
              <div className="mb-[80px]">
                <div className="grid grid-cols-12 place-items-center">
                  <div className="md:col-span-5 px-[1.5rem]">
                    <div className="rounded-md overflow-hidden">
                      <img
                        src="images/media/working1714917818.png"
                        className="w-full"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="md:col-span-7 px-[1.5rem]">
                    <div>
                      <div>
                        <h2 className="text-dark text-4xl leading-[1.4] mb-[18px] pl-[12px] inline-block relative font-bold">
                          We&apos;re Working to Make the World a Better Place
                        </h2>
                        <p className="text-fadeText my-[24px] font-400">
                          Our endeavor is dedicated to enhancing societal
                          well-being through our classified ad listing platform.
                          By fostering safe transactions and meaningful
                          connections, we aim to promote trust, economic
                          empowerment, and community cohesion.
                        </p>
                        <div className="w-full">
                          <a href="/contribution" className="mr-[15px]">
                            <Button type="two">our contribution</Button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-[80px]">
                <div className="grid grid-cols-12 place-items-center">
                  <div className="md:col-span-7 px-[1.5rem]">
                    <div>
                      <div>
                        <h2 className="text-dark text-4xl leading-[1.4] mb-[18px] pl-[12px] inline-block relative font-bold">
                          We&apos;re Hiring: Start Your Career with Our Great
                          Team
                        </h2>
                        <p className="text-fadeText my-[24px] font-400">
                          Our endeavor is dedicated to enhancing societal
                          well-being through our classified ad listing platform.
                          By fostering safe transactions and meaningful
                          connections, we aim to promote trust, economic
                          empowerment, and community cohesion.
                        </p>
                        <div className="w-full">
                          <a href="/contribution" className="mr-[15px]">
                            <Button type="two">our contribution</Button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-5 px-[1.5rem]">
                    <div className="rounded-md overflow-hidden">
                      <img
                        src="images/media/hiring1714917818.png"
                        className="w-full"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </div>
      </Section>

      <Team />
    </>
  );
};

export default About;
