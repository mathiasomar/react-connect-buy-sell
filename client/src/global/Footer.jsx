import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { BiAt } from "react-icons/bi";
import { FiMapPin } from "react-icons/fi";
import { SlScreenSmartphone } from "react-icons/sl";
import Container from "../components/Container";
import LinkCustom from "../components/link";

const Footer = () => {
  return (
    <>
      <div className="bg-overlay py-6">
        <Container className="grid grid-cols-12">
          <div className="xl:col-span-4 lg:col-span-4 md:col-span-6 sm:col-span-6 flex flex-col gap-4 pr-[90px]">
            <div className="w-full block">
              <div className="block">
                <img
                  src="images/logo.png"
                  alt=""
                  className="block h-full w-[112px]"
                />
              </div>
            </div>

            <div className="mt-[30px] w-full">
              <div className="mb-2 w-full relative flex items-center">
                <div className="mr-4 w-[20px] h-[20px] aspect-square bg-gray-800 text-secondary rounded-md flex items-center justify-center">
                  <SlScreenSmartphone />
                </div>
                <div className="text-bgAccent font-[400] text-base leading-[29px] tracking-0">
                  <a href="tel:+254793059661">+254793059661</a>
                </div>
              </div>
              <div className="mb-2 w-full relative flex items-center">
                <div className="mr-4 w-[20px] h-[20px] aspect-square bg-gray-800 text-secondary rounded-md flex items-center justify-center">
                  <FiMapPin />
                </div>
                <div className="text-bgAccent font-[400] text-base leading-[29px] tracking-0">
                  Business Centre Ruiru, Kiambu, Kenya
                </div>
              </div>
              <div className="mb-2 w-full relative flex items-center">
                <div className="mr-4 w-[20px] h-[20px] aspect-square bg-gray-800 text-secondary rounded-md flex items-center justify-center">
                  <BiAt />
                </div>
                <div className="text-bgAccent font-[400] text-base leading-[29px] tracking-0">
                  <a href="mailto:info@hub.co.ke">info@hub.co.ke</a>
                </div>
              </div>
            </div>

            <div className="w-full">
              <h2 className="text-base text-secondary leading-[29px] font-[400]">
                Follow our social media
              </h2>

              <div className="flex items-center gap-[15px] mt-[10px]">
                <a
                  href="#"
                  target="_blank"
                  className="w-[50px] h-[50px] flex items-center justify-center border border-fadeText rounded-full relative cursor-pointer text-secondary hover:border-accent hover:text-accent transition-colors duration-300"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="w-[50px] h-[50px] flex items-center justify-center border border-fadeText rounded-full relative cursor-pointer text-secondary hover:border-accent hover:text-accent transition-colors duration-300"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="w-[50px] h-[50px] flex items-center justify-center border border-fadeText rounded-full relative cursor-pointer text-secondary hover:border-accent hover:text-accent transition-colors duration-300"
                >
                  <BsWhatsapp />
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="w-[50px] h-[50px] flex items-center justify-center border border-fadeText rounded-full relative cursor-pointer text-secondary hover:border-accent hover:text-accent transition-colors duration-300"
                >
                  <BsInstagram />
                </a>
              </div>
            </div>
          </div>

          <div className="xl:col-span-2 lg:col-span-2 md:col-span-6 sm:col-span-6 w-full">
            <div className="w-full text-base font-extrabold leading-[16px] text-white capitalize">
              About
            </div>

            <div className="w-full mt-[30px]">
              <LinkCustom path="/about" type="other" className="block">
                about
              </LinkCustom>
              <LinkCustom path="/blog" type="other" className="block">
                blog
              </LinkCustom>
              <LinkCustom path="/team" type="other" className="block">
                our team
              </LinkCustom>
              <LinkCustom path="/terms" type="other" className="block">
                terms and conditions
              </LinkCustom>
              <LinkCustom path="/privacy" type="other" className="block">
                Privacy Policy
              </LinkCustom>
            </div>
          </div>

          <div className="xl:col-span-2 lg:col-span-2 md:col-span-6 sm:col-span-6 w-full">
            <div className="w-full text-base font-extrabold leading-[16px] text-white capitalize">
              Help & Support
            </div>

            <div className="w-full mt-[30px]">
              <LinkCustom path="/contact" type="other" className="block">
                contact
              </LinkCustom>
              <LinkCustom path="/faq" type="other" className="block">
                FAQ
              </LinkCustom>
              <LinkCustom path="/safety" type="other" className="block">
                safety information
              </LinkCustom>
            </div>
          </div>

          <div className="xl:col-span-4 lg:col-span-4 md:col-span-6 sm:col-span-6 w-full px-[60px]">
            <div className="w-full text-base font-extrabold leading-[16px] text-white capitalize">
              Newest Listings
            </div>

            <div className="mt-[30px] w-full flex flex-col gap-4">
              <div className="flex box-border items-center">
                <a
                  href="#"
                  className="overflow-hidden w-[45px] h-[45px] mr-[15px] relative block rounded-[5px]"
                >
                  <img
                    src="images/listing/card_1-360x240.jpg"
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </a>
                <div className="flex flex-col flex-1 text-sm text-bgLight font-[400]">
                  <a href="#">Iphone 13pro case</a>
                </div>
              </div>
              <div className="flex box-border items-center">
                <a
                  href="#"
                  className="overflow-hidden w-[45px] h-[45px] mr-[15px] relative block rounded-[5px]"
                >
                  <img
                    src="images/listing/baby-009-360x240.jpg"
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </a>
                <div className="flex flex-col flex-1 text-sm text-bgLight font-[400]">
                  <a href="#">Wallie Toy</a>
                </div>
              </div>
              <div className="flex box-border items-center">
                <a
                  href="#"
                  className="overflow-hidden w-[45px] h-[45px] mr-[15px] relative block rounded-[5px]"
                >
                  <img
                    src="images/listing/card_5-360x240.jpg"
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </a>
                <div className="flex flex-col flex-1 text-sm text-bgLight font-[400]">
                  <a href="#">Little Kittens</a>
                </div>
              </div>
              <div className="flex box-border items-center">
                <a
                  href="#"
                  className="overflow-hidden w-[45px] h-[45px] mr-[15px] relative block rounded-[5px]"
                >
                  <img
                    src="images/listing/card_6-360x240.jpg"
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </a>
                <div className="flex flex-col flex-1 text-sm text-bgLight font-[400]">
                  <a href="#">Macbook Pro 16</a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="bg-gray-800  flex flex-wrap items-center py-[15px] min-h-[60px]">
        <div className="text-bgAccent w-full text-center text-sm font-[400] leading-[24px] tracking-normal px-[30px] mx-auto">
          &copy; 2024 Connect Hub- Connecting You Instantly to the Services You
          Need
        </div>
      </div>
    </>
  );
};

export default Footer;
