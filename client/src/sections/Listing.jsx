import { BsFillLightningChargeFill } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { HiOutlineEye } from "react-icons/hi";
import { RiMapPin2Line } from "react-icons/ri";
import Container from "../components/Container";
import Section from "../components/section";
import Title from "../components/title";
import { listing } from "../constants";
import Reveal from "../components/reveal";

const Listing = () => {
  return (
    <Section id="listing">
      <Title topText="Check out what's new" bottomText="Recent Listing" />

      <Container className="mt-[3rem]">
        <div className="mt-[3rem] grid grid-cols-12 gap-10 sm:grid-col-1">
          {listing.map(({ id, img, name, price, location, featured }) => (
            <Reveal
              key={id}
              className={`relative rounded-lg xl:col-span-3 lg:col-span-3 md:col-span-4 sm:col-span-6 ${
                featured ? "border-4 border-accent" : "border border-bgAccent"
              } overflow-hidden group w-full hover:border-accent transition-colors duration-300`}
            >
              {featured && (
                <div
                  className="absolute top-0 left-0 z-10 bg-accent
                 p-2 rounded-ee-md flex items-center font-semibold text-sm uppercase"
                >
                  <span>
                    <BsFillLightningChargeFill />
                  </span>
                  <span>Featured</span>
                </div>
              )}
              <a href="/view-list" className="inline-block w-full">
                <div className="overflow-hidden w-full bg-bgLight h-[240px]">
                  <div className="w-full h-full relative">
                    <div className="w-full h-full absolute top-0 left-0 scale-105 group-hover:scale-100 transition-transform duration-500">
                      <img
                        src={img}
                        loading="lazy"
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <div className="w-full p-[20px]">
                    <h3 className="text-textAccent text-lg font-[800] mb-2 flex items-start justify-between flex-col">
                      <span>{name}</span>
                      <span className="text-primary">Kshs.{price}</span>
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
                  <div className="text-sm text-fadeText">6 months ago</div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Listing;
