import { AiOutlineArrowRight } from "react-icons/ai";
import Button from "../components/button";
import Container from "../components/Container";
import Section from "../components/section";
import Title from "../components/title";

const Classified = () => {
  return (
    <Section>
      <div className="w-full min-h-screen relative">
        <div className="w-full h-[300px] relative">
          <div className="absolute bg-overlay opacity-[0.85] top-0 left-0 right-0 bottom-0"></div>
          <img
            src="images/home_2.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute top-0 right-0 w-full h-full z-10">
          <Container className="mt-[60px] rounded-lg px-[30px] py-[60px] bg-white shadow-2xl">
            <Title
              topText="Find everything"
              bottomText="Get the best classified
ads experience with Connect"
            />

            <div className="mt-[30px] w-[485px] text-fadeText text-base font-[400] leading-[29px] tracking-0 mx-auto">
              <p className="text-center block">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Facilis, beatae odit. Iste ad voluptatum repellat a recusandae
                eius quae? Ut?
              </p>
            </div>

            <div className="mt-[60px] flex items-center justify-between px-[60px]">
              <div className="flex items-center gap-4">
                <div className="text-4xl leading-[100%] font-[700] text-textAccent">
                  12.5M+
                </div>
                <div className="text-primary flex items-center relative text-base leading-0 before:content-[''] before:absolute before:-left-[20px] before:bg-accent before:block before:w-[3px] before:h-[35px] before:m-[10px] before:box-border">
                  Active <br />
                  Listing
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-4xl leading-[100%] font-[700] text-textAccent">
                  900+K
                </div>
                <div className="text-primary flex items-center relative text-base leading-0 before:content-[''] before:absolute before:-left-[20px] before:bg-accent before:block before:w-[3px] before:h-[35px] before:m-[10px] before:box-border">
                  Regular <br />
                  Users
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-4xl leading-[100%] font-[700] text-textAccent">
                  170+K
                </div>
                <div className="text-primary flex items-center relative text-base leading-0 before:content-[''] before:absolute before:-left-[20px] before:bg-accent before:block before:w-[3px] before:h-[35px] before:m-[10px] before:box-border">
                  New ads
                  <br />
                  Daily
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center mt-[60px]">
              <Button type="one" icon={<AiOutlineArrowRight />} path="/listing">
                Explore Listing
              </Button>
            </div>
          </Container>
        </div>
      </div>
    </Section>
  );
};

export default Classified;
