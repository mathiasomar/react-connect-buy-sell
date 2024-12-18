import { RiMapPin2Line } from "react-icons/ri";
import { HiOutlineLightBulb } from "react-icons/hi";
import { FaSearch } from "react-icons/fa";
import Button from "../components/button";
import Container from "../components/Container";
import Section from "../components/section";

const Hero = () => {
  return (
    <Section className="z-20 bg-[url('images/mosaic-big.jpg')] bg-cover bg-center relative">
      <div className="absolute -z-10 w-full h-full top-0 left-0 bg-overlay opacity-[0.85]"></div>

      <Container>
        <h1 className="text-6xl text-secondary font-bold capitalize text-center leading-tight w-1/2 mx-auto">
          find anything around <span className="text-accent">you</span>
        </h1>

        <div className="p-[15px] w-3/5 mx-auto bg-secondary rounded-lg mt-10">
          <form
            action=""
            className="flex items-center justify-between w-full gap-4"
          >
            <div className="flex items-center w-[90%] gap-4">
              <div
                className="w-1/2 p-[15px] bg-white border border-bgAccent rounded-[5px] relative cursor-text
               flex items-center gap-4"
              >
                <div className="w-[30px] h-[30px] rounded-[5px] bg-bgAccent text-textAccent flex items-center justify-center text-lg">
                  <HiOutlineLightBulb />
                </div>
                <input
                  className="w-[calc(100% - 30px)] border-none outline-none py-1 text-neutral"
                  placeholder="I'm looking for..."
                ></input>
              </div>
              <div
                className="w-1/2 p-[15px] bg-white border border-[#d5e3ee] rounded-[5px] relative cursor-text
               flex items- gap-4"
              >
                <div className="w-[30px] h-[30px] rounded-[5px] bg-bgAccent text-textAccent flex items-center justify-center text-lg">
                  <RiMapPin2Line />
                </div>
                <input
                  className="w-[calc(100% - 30px)] border-none outline-none py-1 text-neutral"
                  placeholder="Location (e.g. Nairobi)"
                ></input>
              </div>
            </div>
            <div className="w-[10%]">
              <Button type="two" className="hover:shadow-2xl py-6">
                <FaSearch />
              </Button>
            </div>
          </form>
        </div>

        <div className="flex items-center justify-center gap-2 mt-10">
          <a
            href="/vehicles"
            className="p-[10px] border border-white w-[100px] h-[90px] text-sm text-white aspect-square rounded-md flex flex-col justify-evenly items-center transition-colors duration-300 hover:border-accent"
          >
            <div className="w-[45px] h-[45px]">
              <img src="images/vehicle_icon.png" alt="" className="w-full" />
            </div>
            <div className="capitalize font-semibold">vehicles</div>
          </a>
          <a
            href="/fashion"
            className="p-[10px] border border-white w-[100px] h-[90px] text-sm text-white aspect-square rounded-md flex flex-col justify-evenly items-center transition-colors duration-300 hover:border-accent"
          >
            <div className="w-[45px] h-[45px]">
              <img src="images/fashion_icon.png" alt="" className="w-full" />
            </div>
            <div className="capitalize font-semibold">fashions</div>
          </a>
          <a
            href="/jobs"
            className="p-[10px] border border-white w-[100px] h-[90px] text-sm text-white aspect-square rounded-md flex flex-col justify-evenly items-center transition-colors duration-300 hover:border-accent"
          >
            <div className="w-[45px] h-[45px]">
              <img src="images/jobs-1.png" alt="" className="w-full" />
            </div>
            <div className="capitalize font-semibold">Jobs</div>
          </a>
          <a
            href="/estate"
            className="p-[10px] border border-white w-[100px] h-[90px] text-sm text-white aspect-square rounded-md flex flex-col justify-evenly items-center transition-colors duration-300 hover:border-accent"
          >
            <div className="w-[45px] h-[45px]">
              <img
                src="images/real_estate_icon.png"
                alt=""
                className="w-full"
              />
            </div>
            <div className="capitalize font-semibold">real estate</div>
          </a>
          <a
            href="/services"
            className="p-[10px] border border-white w-[100px] h-[90px] text-sm text-white aspect-square rounded-md flex flex-col justify-evenly items-center transition-colors duration-300 hover:border-accent"
          >
            <div className="w-[45px] h-[45px]">
              <img src="images/services_icon.png" alt="" className="w-full" />
            </div>
            <div className="capitalize font-semibold">services</div>
          </a>
          <a
            href="/pets"
            className="p-[10px] border border-white w-[100px] h-[90px] text-sm text-white aspect-square rounded-md flex flex-col justify-evenly items-center transition-colors duration-300 hover:border-accent"
          >
            <div className="w-[45px] h-[45px]">
              <img src="images/pets_icon.png" alt="" className="w-full" />
            </div>
            <div className="capitalize font-semibold">pets</div>
          </a>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
