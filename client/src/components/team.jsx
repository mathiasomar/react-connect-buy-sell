import { BsInstagram } from "react-icons/bs";
import { RiLinkedinFill } from "react-icons/ri";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { team } from "../constants";
import Container from "./Container";
import Section from "./section";

const Team = () => {
  return (
    <Section className="min-h-screen">
      <div className="py-[90px]">
        <Container>
          <div className="w-full">
            <div className="mx-auto md:w-3/4 sm:w-[90%] text-center mb-[50px]">
              <h2 className="font-bold text-7xl leading-[1.1] text-dark inline-block ">
                Meet our hard working team
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-12">
            {team.map(({ id, name, title, img }) => (
              <div key={id} className="lg:col-span-3 md:col-span-4 sm:col-span-6 px-[12px]">
                <div className="mb-[24px]">
                  <div className="relative overflow-hidden mb-[12px] rounded-md w-full group">
                    <img src={img} className="w-full h-auto" alt="" />

                    <ul className="absolute bottom-[10%] -translate-y-[10%] left-0 right-0 text-center">
                      <li className="inline-block">
                        <a
                          href="#"
                          className="text-white w-[40px] h-[40px] rounded-full text-xl leading-[40px] grid place-content-center text-center ml-[8px] bg-primary opacity-0 translate-y-[30px] group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700"
                        >
                          <FaFacebookF />
                        </a>
                      </li>
                      <li className="inline-block">
                        <a
                          href="#"
                          className="text-white w-[40px] h-[40px] rounded-full text-xl leading-[40px] grid place-content-center text-center ml-[8px] bg-primary opacity-0 translate-y-[30px] group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 delay-100"
                        >
                          <AiOutlineTwitter />
                        </a>
                      </li>
                      <li className="inline-block">
                        <a
                          href="#"
                          className="text-white w-[40px] h-[40px] rounded-full text-xl leading-[40px] grid place-content-center text-center ml-[8px] bg-primary opacity-0 translate-y-[30px] group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 delay-200"
                        >
                          <RiLinkedinFill />
                        </a>
                      </li>
                      <li className="inline-block">
                        <a
                          href="#"
                          className="text-white w-[40px] h-[40px] rounded-full text-xl leading-[40px] grid place-content-center text-center ml-[8px] bg-primary opacity-0 translate-y-[30px] group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 delay-300"
                        >
                          <BsInstagram />
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-dark font-[500] text-2xl">{name}</h3>
                    <p className="text-base text-[#667085]">{title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </Section>
  );
};

export default Team;
