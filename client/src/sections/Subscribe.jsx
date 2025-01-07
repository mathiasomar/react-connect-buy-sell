import { BiAt } from "react-icons/bi";
import { AiOutlineArrowRight } from "react-icons/ai";
import Container from "../components/Container";
import Section from "../components/section";

const Subscribe = () => {
  return (
    <Section className="py-0">
      <div className=" relative w-full py-[60px] bg-[url('images/home_2.jpg')] bg-center object-cover bg-cover">
        <div className="absolute top-0 left-0 w-full h-full bg-overlay opacity-[0.75]"></div>
        <Container className="relative grid grid-cols-12 gap-[4rem]">
          <div className="md:col-span-6">
            <h1 className="text-4xl text-secondary font-[800] leading-[38px] -tracking-[1px]">
              <span className="text-accent">Sign up</span> to receive the latest
              updated and news
            </h1>
          </div>
          <div className="md:col-span-6 sm:col-span-12 bg-white p-4 rounded-lg">
            <form
              action=""
              className="flex items-center justify-between w-full gap-4"
            >
              <div className="flex items-center w-[90%] gap-4">
                <div
                  className="w-full p-[15px] bg-white border border-bgAccent rounded-[5px] relative cursor-text
                         flex items-center gap-4"
                >
                  <div className="w-[30px] h-[30px] rounded-[5px] bg-bgAccent text-textAccent flex items-center justify-center text-lg">
                    <BiAt />
                  </div>
                  <input
                    className="w-[calc(100% - 30px)] border-none outline-none py-1 text-neutral placeholder:text-neutral"
                    placeholder="Email"
                  ></input>
                </div>
              </div>
              <div className="w-[10%]">
                <button className="w-full txt-xl py-6 flex items-center justify-center rounded-md relative overflow-hidden bg-btn2 text-secondary">
                  <AiOutlineArrowRight />
                </button>
              </div>
            </form>
          </div>
        </Container>
      </div>
    </Section>
  );
};

export default Subscribe;
