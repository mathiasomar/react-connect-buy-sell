import { AiOutlineArrowRight } from "react-icons/ai";
import { Suspense } from "react";
import Container from "../components/Container";
import Section from "../components/section";
import Title from "./../components/title";
import { discCategory } from "../constants";
import Button from "../components/button";
import Reveal from "../components/reveal";

const Discover = () => {
  return (
    <Section>
      <Title topText="Featured categories" bottomText="Discover more" />

      <Container className="mt-14">
        <div className="w-full grid grid-cols-12 gap-10">
          {discCategory.map(({ id, name, img, path }) => (
            <Reveal key={id} className="xl:col-span-3 lg:col-span-3 md:col-span-4 sm:col-span-6">
              <a
                href={path}
                className="inline-block w-full bg-white border border-bgAccent rounded-md aspect-square cursor-pointer pb-1"
              >
                <div className="relative w-full h-[300px] group overflow-hidden">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50px] h-[50px] rounded-full bg-accent text-textAccent flex items-center justify-center z-10 transition-opacity opacity-0 group-hover:opacity-[1]">
                    <AiOutlineArrowRight />
                  </div>

                  <Suspense fallback="">
                    <img
                      src={img}
                      loading="lazy"
                      alt=""
                      className="w-full h-[300px] duration-500 group-hover:scale-[1.2]"
                    />
                  </Suspense>
                </div>
                <div className="full py-4 h-[80px] px-[15px] flex items-center justify-center text-center overflow-hidden bg-secondary text-textAccent font-[800] text-base">
                  {name}
                </div>
              </a>
            </Reveal>
          ))}
          <a
            href="/more"
            className="xl:col-span-3 lg:col-span-3 md:col-span-4 sm:col-span-6 relative z-20 rounded-md aspect-square w-full cursor-pointer pb-1 h-[380px] overflow-hidden bg-[url('images/home_category.jpeg')] bg-cover bg-center flex items-center gap-10 justify-center flex-col px-4"
          >
            <div className="absolute -z-10 w-full h-full top-0 left-0 bg-overlay opacity-[0.85]"></div>
            <div className="text-center text-secondary text-xl font-[800]">
              Didn&apos;t find the category you&apos;re looking for?
            </div>
            <Button type="one" icon={<AiOutlineArrowRight />}>
              view all
            </Button>
          </a>
        </div>
      </Container>
    </Section>
  );
};

export default Discover;
