import { FiArrowLeft } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";
import Container from "../components/Container";
import PageHeader from "../components/pageHeader";
import Section from "../components/section";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Thumbs, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/effect-fade";
import { useEffect, useState } from "react";

const ViewListing = () => {
  useEffect(() => {
    document.title = "Connect | Listing Details";
  });
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <Section className="min-h-screen">
      <div className="py-[50px]">
        <Container>
          <PageHeader page="Listing Details" />
        </Container>

        <Container className="mt-[30px]">
          <div className="grid grid-cols-12 place-content-center">
            <div className="xl:col-span-8 lg:col-span-8 md:col-span-8">
              <div>
                <div className="mb-4">
                  <div className="flex gap-[20px] justify-between items-center">
                    <div className="text-textColor1 text-2xl font-[600] leading-[23px]">
                      Spoken English
                    </div>
                    <div className="text-right">
                      <div className="text-end text-textColor6 relative text-2xl font-[600] leading-[23px]">
                        <span>Ksh.130.00</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-[12px] text-sm leading-[20px] flex items-center gap-[12px]">
                    <span className="text-fadeText">
                      Posted On <span className="posted">11 June 2024</span>
                    </span>
                    <span className="inline-block h-[20px] w-[1px] bg-bgFade"></span>
                    <span className="text-fadeText">
                      Location <span className="posted">Ruiru, Kiambu</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Image Slider */}
              <div className="border border-bgAccent rounded-[8px] shadow-sm">
                <div className="relative">
                  <div className="custom-button-prev">
                    <FiArrowLeft />
                  </div>
                  <div className="custom-button-next">
                    <FiArrowRight />
                  </div>

                  <Swiper
                    className="w-full h-auto"
                    effect={"fade"}
                    loop={true}
                    pagination={false}
                    navigation={{
                      nextEl: ".custom-button-next",
                      prevEl: ".custom-button-prev",
                    }}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[EffectFade, Navigation, Thumbs]}
                  >
                    <SwiperSlide className="slider-img">
                      <img src="images/media/kyle-gregory-devaras-6rtm8esd1t8-unsplash1718191970.jpg" />
                    </SwiperSlide>
                    <SwiperSlide className="slider-img">
                      <img src="images/media/javier-trueba-iqpr1xkf5f0-unsplash1718091354.jpg" />
                    </SwiperSlide>
                    <SwiperSlide className="slider-img">
                      <img src="images/media/eliott-reyna-kct-7cirbew-unsplash1718191957.jpg" />
                    </SwiperSlide>
                  </Swiper>
                </div>
                <div className="p-4 overflow-hidden">
                  <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={4}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[EffectFade, Navigation, Thumbs]}
                    className="mySwiper"
                  >
                    <SwiperSlide className="thumbs-slider">
                      <img src="images/media/kyle-gregory-devaras-6rtm8esd1t8-unsplash1718191970.jpg" />
                    </SwiperSlide>
                    <SwiperSlide className="thumbs-slider">
                      <img src="images/media/javier-trueba-iqpr1xkf5f0-unsplash1718091354.jpg" />
                    </SwiperSlide>
                    <SwiperSlide className="thumbs-slider">
                      <img src="images/media/eliott-reyna-kct-7cirbew-unsplash1718191957.jpg" />
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
              {/* Google Ads */}
              {/* proDescription */}
              {/* Relevant ads */}
            </div>
            <div className="xl:col-span-4 lg:col-span-4 md:col-span-4"></div>
          </div>
        </Container>
      </div>
    </Section>
  );
};

export default ViewListing;
