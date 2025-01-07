import { BsFillLightningChargeFill } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { HiOutlineEye } from "react-icons/hi";
import { RiMapPin2Line } from "react-icons/ri";
import { useEffect } from "react";
import Section from "../components/section";
import PageHeader from "../components/pageHeader";
import Container from "../components/Container";
import { listing } from "../constants";
import Reveal from "../components/reveal";

const Listings = () => {
  useEffect(() => {
    document.title = "Connect | Listings";
  }, []);
  return (
    <Section className="min-h-screen">
      <Container>
        <PageHeader page="Listings" />
      </Container>

      <Container className="mt-[50px]">
        <div className="flex gap-[22px] relative">
          <div className="min-h-[256px]">
            <form action="">
              <div className="categoriesWrapper">
                <div className="w-full">
                  <input
                    type="text"
                    className="input-custom"
                    placeholder="Listing search"
                  />
                </div>
              </div>
              <div className="categoriesWrapper">
                <div className="mb-[12px]">
                  <label htmlFor="" className="input-custom-label">
                    Location
                  </label>
                  <input
                    type="text"
                    className="input-custom"
                    placeholder="Enter a location"
                  />
                </div>

                <button className="btn2">filter</button>
              </div>
              <div className="categoriesWrapper">
                <div>
                  <select name="" id="" className="input-custom">
                    <option value="" selected disabled>
                      Category
                    </option>
                    <option value="">Car & Vehicles</option>
                    <option value="">Electronics</option>
                    <option value="">Home & Living</option>
                    <option value="">Fashion</option>
                    <option value="">Sports</option>
                  </select>
                </div>
                <div>
                  <select name="" id="" className="input-custom">
                    <option value="" selected disabled>
                      Sub Category
                    </option>
                  </select>
                </div>
                <div>
                  <select name="" id="" className="input-custom">
                    <option value="" selected disabled>
                      Child Category
                    </option>
                  </select>
                </div>
              </div>
              <div className="categoriesWrapper">
                <div className="mb-[12px]">
                  <h5 className="font-[500] text-sm leading-[20px] text-dark mb-[10px]">
                    Price Range
                  </h5>

                  <div className="w-full flex items-center justify-between mb-[16px]">
                    <div className="relative w-[120px]">
                      {/* <div className="absolute left-[6px] top-1/2 -translate-y-1/2">
                        Ksh
                      </div> */}

                      <input
                        type="number"
                        className="input-range"
                        defaultValue="1200"
                        min="1"
                      />
                    </div>
                    <div>-</div>
                    <div className="relative w-[120px]">
                      {/* <div className="absolute left-[6px] top-1/2 -translate-y-1/2">
                        Ksh
                      </div> */}

                      <input
                        type="number"
                        className="input-range"
                        defaultValue="30000"
                        min="1000"
                      />
                    </div>
                  </div>
                </div>

                <button className="btn2">filter</button>
              </div>
              <div className="categoriesWrapper">
                <h5 className="font-[500] text-sm leading-[20px] text-dark ">
                  Types
                </h5>

                <ul>
                  <li>
                    <a
                      href="#"
                      className="block py-[12px] px-[16px] text-sm text-[rgb(99,92,92)] capitalize hover:text-primary transition-colors duration-500"
                    >
                      featured
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-[12px] px-[16px] text-sm text-[rgb(99,92,92)] capitalize hover:text-primary transition-colors duration-500"
                    >
                      top listing
                    </a>
                  </li>
                </ul>
              </div>
              <div className="categoriesWrapper">
                <h5 className="font-[500] text-sm leading-[20px] text-dark ">
                  Condition
                </h5>

                <ul>
                  <li>
                    <a
                      href="#"
                      className="block py-[12px] px-[16px] text-sm text-[rgb(99,92,92)] capitalize hover:text-primary transition-colors duration-500"
                    >
                      new
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-[12px] px-[16px] text-sm text-[rgb(99,92,92)] capitalize hover:text-primary transition-colors duration-500"
                    >
                      used
                    </a>
                  </li>
                </ul>
              </div>
              <div className="categoriesWrapper">
                <h5 className="font-[500] text-sm leading-[20px] text-dark ">
                  Date Posted
                </h5>

                <ul>
                  <li>
                    <a
                      href="#"
                      className="block py-[12px] px-[16px] text-sm text-[rgb(99,92,92)] capitalize hover:text-primary transition-colors duration-500"
                    >
                      today
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-[12px] px-[16px] text-sm text-[rgb(99,92,92)] capitalize hover:text-primary transition-colors duration-500"
                    >
                      yesterday
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-[12px] px-[16px] text-sm text-[rgb(99,92,92)] capitalize hover:text-primary transition-colors duration-500"
                    >
                      last week
                    </a>
                  </li>
                </ul>
              </div>
            </form>
          </div>

          <div className="min-w-[calc(100% - 256px)]">
            <div className="w-full grid grid-cols-12 gap-5">
              {listing.map(({ id, img, name, price, location, featured }) => (
                <Reveal
                  key={id}
                  className={`relative rounded-lg xl:col-span-4 lg:col-span-4 md:col-span-6 sm:col-span-6 ${
                    featured
                      ? "border-4 border-accent"
                      : "border border-bgAccent"
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
                  <a href="/list" className="inline-block w-full">
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
                        <h3 className="text-textAccent text-xl font-[800] mb-2 flex items-start justify-between flex-col">
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
          </div>
          <div></div>
        </div>
      </Container>
    </Section>
  );
};

export default Listings;
