import { FiArrowLeft } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";
import Container from "../components/Container";
import Section from "../components/section";
import Title from "../components/title";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { useMediaQuery } from "react-responsive";

const Testimonials = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  return (
    <Section className="h-screen">
      <Container>
        <Title
          topText="What our clients says"
          bottomText="Testimonials"
          align="start"
        />
      </Container>

      <Container>
        <div className="relative">
          <div className="custom-button-prev">
            <FiArrowLeft />
          </div>
          <div className="custom-button-next">
            <FiArrowRight />
          </div>
          <Swiper
            className="min-h-[30vh] mt-[2rem]"
            grabCursor={true}
            modules={[Navigation, Pagination, EffectCoverflow]}
            spaceBetween={50}
            slidesPerView={
              isDesktopOrLaptop ? 3 : isBigScreen ? 4 : isTabletOrMobile ? 2 : 1
            }
            navigation={{
              nextEl: ".custom-button-next",
              prevEl: ".custom-button-prev",
            }}
            pagination={{ clickable: true, dynamicBullets: true }}
            scrollbar={{ draggable: true }}
            loop={true}
            centeredSlides={true}
            effect="coverflow"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
          >
            <SwiperSlide className="py-2 my-auto">
              {({ isActive }) => (
                <div className={`slider-css ${isActive ? "active" : ""}`}>
                  <div>
                    <blockquote className="text-base font-[400] leading-[20px]">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Cumque laborum adipisci quasi, nam aliquam iste esse
                      laudantium est enim, voluptas recusandae mollitia itaque
                      quo animi non repellat natus explicabo impedit.
                    </blockquote>
                  </div>
                  <div className="mt-10 flex items-end justify-between">
                    <div className="flex items-center">
                      <div className="w-[60px] h-[60px] rounded-full mr-2 overflow-hidden">
                        <img
                          src="images/media/tam11714911266.jpg"
                          className="w-full h-full object-cover"
                          alt=""
                        />
                      </div>
                      <div>
                        <p className="text-sm font-semibold">Omar Mathias</p>
                        <p className="text-sm text-fadeText">CEO Bank</p>
                      </div>
                    </div>
                    <div className="text-sm text-fadeText">6 months ago</div>
                  </div>
                </div>
              )}
            </SwiperSlide>
            <SwiperSlide className="py-2 my-auto">
              {({ isActive }) => (
                <div className={`slider-css ${isActive ? "active" : ""}`}>
                  <div>
                    <blockquote className="text-base font-[400] leading-[20px]">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Cumque laborum adipisci quasi, nam aliquam iste esse
                      laudantium est enim, voluptas recusandae mollitia itaque
                      quo animi non repellat natus explicabo impedit.
                    </blockquote>
                  </div>
                  <div className="mt-10 flex items-end justify-between">
                    <div className="flex items-center">
                      <div className="w-[60px] h-[60px] rounded-full mr-2 overflow-hidden">
                        <img
                          src="images/media/tam11714911266.jpg"
                          className="w-full h-full object-cover"
                          alt=""
                        />
                      </div>
                      <div>
                        <p className="text-sm font-semibold">Omar Mathias</p>
                        <p className="text-sm text-fadeText">CEO Bank</p>
                      </div>
                    </div>
                    <div className="text-sm text-fadeText">6 months ago</div>
                  </div>
                </div>
              )}
            </SwiperSlide>
            <SwiperSlide className="py-2 my-auto">
              {({ isActive }) => (
                <div className={`slider-css ${isActive ? "active" : ""}`}>
                  <div>
                    <blockquote className="text-base font-[400] leading-[20px]">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Cumque laborum adipisci quasi, nam aliquam iste esse
                      laudantium est enim, voluptas recusandae mollitia itaque
                      quo animi non repellat natus explicabo impedit.
                    </blockquote>
                  </div>
                  <div className="mt-10 flex items-end justify-between">
                    <div className="flex items-center">
                      <div className="w-[60px] h-[60px] rounded-full mr-2 overflow-hidden">
                        <img
                          src="images/media/tam11714911266.jpg"
                          className="w-full h-full object-cover"
                          alt=""
                        />
                      </div>
                      <div>
                        <p className="text-sm font-semibold">Omar Mathias</p>
                        <p className="text-sm text-fadeText">CEO Bank</p>
                      </div>
                    </div>
                    <div className="text-sm text-fadeText">6 months ago</div>
                  </div>
                </div>
              )}
            </SwiperSlide>
            <SwiperSlide className="py-2 my-auto">
              {({ isActive }) => (
                <div className={`slider-css ${isActive ? "active" : ""}`}>
                  <div>
                    <blockquote className="text-base font-[400] leading-[20px]">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Cumque laborum adipisci quasi, nam aliquam iste esse
                      laudantium est enim, voluptas recusandae mollitia itaque
                      quo animi non repellat natus explicabo impedit.
                    </blockquote>
                  </div>
                  <div className="mt-10 flex items-end justify-between">
                    <div className="flex items-center">
                      <div className="w-[60px] h-[60px] rounded-full mr-2 overflow-hidden">
                        <img
                          src="images/media/tam11714911266.jpg"
                          className="w-full h-full object-cover"
                          alt=""
                        />
                      </div>
                      <div>
                        <p className="text-sm font-semibold">Omar Mathias</p>
                        <p className="text-sm text-fadeText">CEO Bank</p>
                      </div>
                    </div>
                    <div className="text-sm text-fadeText">6 months ago</div>
                  </div>
                </div>
              )}
            </SwiperSlide>
            <SwiperSlide className="py-2 my-auto">
              {({ isActive }) => (
                <div className={`slider-css ${isActive ? "active" : ""}`}>
                  <div>
                    <blockquote className="text-base font-[400] leading-[20px]">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Cumque laborum adipisci quasi, nam aliquam iste esse
                      laudantium est enim, voluptas recusandae mollitia itaque
                      quo animi non repellat natus explicabo impedit.
                    </blockquote>
                  </div>
                  <div className="mt-10 flex items-end justify-between">
                    <div className="flex items-center">
                      <div className="w-[60px] h-[60px] rounded-full mr-2 overflow-hidden">
                        <img
                          src="images/media/tam11714911266.jpg"
                          className="w-full h-full object-cover"
                          alt=""
                        />
                      </div>
                      <div>
                        <p className="text-sm font-semibold">Omar Mathias</p>
                        <p className="text-sm text-fadeText">CEO Bank</p>
                      </div>
                    </div>
                    <div className="text-sm text-fadeText">6 months ago</div>
                  </div>
                </div>
              )}
            </SwiperSlide>
          </Swiper>
        </div>
      </Container>
    </Section>
  );
};

export default Testimonials;
