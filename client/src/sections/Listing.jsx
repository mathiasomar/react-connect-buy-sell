import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { HiOutlineEye } from "react-icons/hi";
import { AiOutlineArrowRight } from "react-icons/ai";
import { RiMapPin2Line } from "react-icons/ri";
import Button from "../components/button";
import Container from "../components/Container";
import Section from "../components/section";
import Title from "../components/title";
import { listing } from "../constants";
import { motion } from "framer-motion";
import { useState } from "react";

const Listing = () => {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <Section>
      <Title topText="Check out what's new" bottomText="Featured ads" />

      <Container className="mt-[3rem]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div
              className={`h-[50px] px-[30px] rounded-[5px] ${
                activeTab == 1 ? "bg-accent text-textAccent" : "bg-bgLink"
              } duration-500 hover:border hover:border-accent cursor-pointer font-[800] flex items-center text-base`}
              onClick={() => setActiveTab(1)}
            >
              All
            </div>
            <div
              className={`h-[50px] px-[30px] rounded-[5px] ${
                activeTab == 2 ? "bg-accent text-textAccent" : "bg-bgLink"
              } duration-500 hover:border hover:border-accent cursor-pointer font-[800] flex items-center text-base`}
              onClick={() => setActiveTab(2)}
            >
              Beauty
            </div>
            <div
              className={`h-[50px] px-[30px] rounded-[5px] ${
                activeTab == 3 ? "bg-accent text-textAccent" : "bg-bgLink"
              } duration-500 hover:border hover:border-accent cursor-pointer font-[800] flex items-center text-base`}
              onClick={() => setActiveTab(3)}
            >
              Cars
            </div>
            <div
              className={`h-[50px] px-[30px] rounded-[5px] ${
                activeTab == 4 ? "bg-accent text-textAccent" : "bg-bgLink"
              } duration-500 hover:border hover:border-accent cursor-pointer font-[800] flex items-center text-base`}
              onClick={() => setActiveTab(4)}
            >
              Devices
            </div>
            <div
              className={`h-[50px] px-[30px] rounded-[5px] ${
                activeTab == 5 ? "bg-accent text-textAccent" : "bg-bgLink"
              } duration-500 hover:border hover:border-accent cursor-pointer font-[800] flex items-center text-base`}
              onClick={() => setActiveTab(5)}
            >
              Jobs
            </div>
            <div
              className={`h-[50px] px-[30px] rounded-[5px] ${
                activeTab == 6 ? "bg-accent text-textAccent" : "bg-bgLink"
              } duration-500 hover:border hover:border-accent cursor-pointer font-[800] flex items-center text-base`}
              onClick={() => setActiveTab(6)}
            >
              Phone
            </div>
            <div
              className={`h-[50px] px-[30px] rounded-[5px] ${
                activeTab == 7 ? "bg-accent text-textAccent" : "bg-bgLink"
              } duration-500 hover:border hover:border-accent cursor-pointer font-[800] flex items-center text-base`}
              onClick={() => setActiveTab(7)}
            >
              Real Estate
            </div>
            <div
              className={`h-[50px] px-[30px] rounded-[5px] ${
                activeTab == 8 ? "bg-accent text-textAccent" : "bg-bgLink"
              } duration-500 hover:border hover:border-accent cursor-pointer font-[800] flex items-center text-base`}
              onClick={() => setActiveTab(8)}
            >
              Services
            </div>
          </div>
          <div>
            <a href="/all">
              <Button type="two" icon={<AiOutlineArrowRight />}>
                view All
              </Button>
            </a>
          </div>
        </div>

        <motion.div
          initial={{ y: 48, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.75 }}
          className={`mt-[3rem] ${
            activeTab == 1 ? "grid grid-cols-3 gap-10 sm:grid-col-1" : "hidden"
          }`}
        >
          {listing.map(({ id, img, name, price, location, featured }) => (
            <motion.div
              initial={{ y: 48, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.75 }}
              key={id}
              className={`rounded-lg ${
                featured ? "border-4 border-accent" : "border border-bgAccent"
              } overflow-hidden group w-full`}
            >
              <div className="overflow-hidden w-full bg-bgLight h-[240px]">
                <div className="w-full h-full relative">
                  <div className="w-full h-full absolute top-0 left-0 scale-105 group-hover:scale-100 transition-transform duration-500">
                    <img
                      src={img}
                      loading="lazy"
                      alt=""
                      className="w-full h-full"
                    />
                  </div>
                </div>
              </div>

              <div>
                <div className="w-full p-[20px]">
                  <h3 className="text-textAccent text-xl font-[800] mb-2 flex items-center justify-between">
                    <span>{name}</span>
                    <span>Kshs.{price}</span>
                  </h3>
                  <div className="flex items-center">
                    <span className="mr-2 w-[20px] h-[20px] rounded-full bg-accent text-textAccent flex items-center justify-center">
                      <RiMapPin2Line />
                    </span>
                    <span className="text-base text-fadeText font-semibold">
                      {location}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between py-[15px] px-[20px]">
                <div className="flex items-center gap-4">
                  <a
                    href="#"
                    className=" relative w-[35px] h-[35px] rounded-full border border-bgAccent flex items-center justify-center before:content-['View'] before:absolute before:max-w-[200px] before:h-auto before:py-1 before:px-4 before:rounded-md before:bg-neutral before:text-white before:-top-9 before:-left-4 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100 hover:border-accent transition-colors duration-300"
                  >
                    <HiOutlineEye size={18} />
                  </a>
                  <a
                    href="#"
                    className=" relative w-[35px] h-[35px] rounded-full border border-bgAccent flex items-center justify-center before:content-['Compare'] before:absolute before:max-w-[200px] before:h-auto before:py-1 before:px-4 before:rounded-md before:bg-neutral before:text-white before:-top-9 before:-left-4 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100 hover:border-accent transition-colors duration-300"
                  >
                    <AiOutlinePlus size={18} />
                  </a>
                  <a
                    href="#"
                    className="relative w-[35px] h-[35px] rounded-full border border-bgAccent flex items-center justify-center before:content-['Favorites'] before:absolute before:max-w-[200px] before:h-auto before:py-1 before:px-4 before:rounded-md before:bg-neutral before:text-white before:-top-9 before:-left-4 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100 hover:border-accent transition-colors duration-300"
                  >
                    <AiOutlineHeart size={18} />
                  </a>
                </div>
                <div></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ y: 48, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.75 }}
          className={`mt-[3rem] ${
            activeTab == 2 ? "grid grid-cols-3 gap-10 sm:grid-col-1" : "hidden"
          }`}
        >
          <motion.div
            initial={{ y: 48, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.75 }}
            // key={id}
            className="rounded-lg border border-bgAccent overflow-hidden group w-full"
          >
            <div className="overflow-hidden w-full bg-bgLight h-[240px]">
              <div className="w-full h-full relative">
                <div className="w-full h-full absolute top-0 left-0 scale-105 group-hover:scale-100 transition-transform duration-500">
                  <img
                    src="images/listing/clothing-001-360x240.jpg"
                    loading="lazy"
                    alt=""
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>

            <div>
              <div className="w-full p-[20px]">
                <h3 className="text-textAccent text-xl font-[800] mb-2 flex items-center justify-between">
                  <span>Handbags with Style</span>
                  <span>Kshs.2000</span>
                </h3>
                <div className="flex items-center">
                  <span className="mr-2 w-[20px] h-[20px] rounded-full bg-accent text-textAccent flex items-center justify-center">
                    <RiMapPin2Line />
                  </span>
                  <span className="text-base text-fadeText font-semibold">
                    Nairobi, Kenya
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between py-[15px] px-[20px]">
              <div className="flex items-center gap-4">
                <a
                  href="#"
                  className=" relative w-[35px] h-[35px] rounded-full border border-bgAccent flex items-center justify-center before:content-['View'] before:absolute before:max-w-[200px] before:h-auto before:py-1 before:px-4 before:rounded-md before:bg-neutral before:text-white before:-top-9 before:-left-4 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100 hover:border-accent transition-colors duration-300"
                >
                  <HiOutlineEye size={18} />
                </a>
                <a
                  href="#"
                  className=" relative w-[35px] h-[35px] rounded-full border border-bgAccent flex items-center justify-center before:content-['Compare'] before:absolute before:max-w-[200px] before:h-auto before:py-1 before:px-4 before:rounded-md before:bg-neutral before:text-white before:-top-9 before:-left-4 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100 hover:border-accent transition-colors duration-300"
                >
                  <AiOutlinePlus size={18} />
                </a>
                <a
                  href="#"
                  className="relative w-[35px] h-[35px] rounded-full border border-bgAccent flex items-center justify-center before:content-['Favorites'] before:absolute before:max-w-[200px] before:h-auto before:py-1 before:px-4 before:rounded-md before:bg-neutral before:text-white before:-top-9 before:-left-4 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100 hover:border-accent transition-colors duration-300"
                >
                  <AiOutlineHeart size={18} />
                </a>
              </div>
              <div></div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
};

export default Listing;
