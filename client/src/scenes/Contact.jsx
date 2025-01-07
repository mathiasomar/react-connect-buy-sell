import { AiOutlineYoutube } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import Container from "../components/Container";
import Section from "../components/section";
import PageHeader from "./../components/pageHeader";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    document.title = "Connect | Contact";
  }, []);
  return (
    <Section className="min-h-screen">
      <Container>
        <PageHeader page="Contact Us" />
      </Container>

      <Container className="mt-[100px]">
        <div className="w-full grid grid-cols-12">
          <div className="md:col-span-6 mb-[5px] px-[1.5rem]">
            <div className="">
              <div>
                <h3 className="font-bold text-4xl leading-[44px] mb-[8px] text-neutral">
                  Get in touch
                </h3>
                <p className="text-textColor2 font-[400] leading-[1.6] text-base">
                  Our friendly team would love to hear from you.
                </p>
              </div>

              <form action="" className="mt-[48px] w-full">
                <div className="mt-[20px]">
                  <label
                    htmlFor=""
                    className="text-sm leading-[20px] font-[500] text-textColor1 mb-[8px]"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    className="input-field"
                    placeholder="Name"
                  />
                </div>
                <div className="mt-[20px]">
                  <label
                    htmlFor=""
                    className="text-sm leading-[20px] font-[500] text-textColor1 mb-[8px]"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="input-field"
                    placeholder="Email"
                  />
                </div>
                <div className="mt-[20px]">
                  <label
                    htmlFor=""
                    className="text-sm leading-[20px] font-[500] text-textColor1 mb-[8px]"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="input-field"
                    placeholder="Phone"
                  />
                </div>
                <div className="mt-[20px]">
                  <label
                    htmlFor=""
                    className="text-sm leading-[20px] font-[500] text-textColor1 mb-[8px]"
                  >
                    Type Your Message
                  </label>
                  <textarea
                    name=""
                    id=""
                    rows="6"
                    className="input-field"
                    placeholder="Type Your Message"
                  ></textarea>
                </div>

                <button className="sub-btn">Send</button>
              </form>
            </div>
          </div>

          <div className="md:col-span-6 px-[1.5rem]">
            <div className="p-[24px] border border-bgAccent rounded-[8px] shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-[36px] h-[36px] rounded-full border border-bgAccent shrink-0 flex items-center justify-center text-textColor3">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="text-textColor3 leading-[20px] text-xs">
                    Address
                  </p>
                  <h5 className="font-[500] text-base leading-[24px] text-neutral">
                    4140 Parker Rd. Allentown, New Mexico 31134
                  </h5>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-[36px] h-[36px] rounded-full border border-bgAccent shrink-0 flex items-center justify-center text-textColor3">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="text-textColor3 leading-[20px] text-xs">
                    Email
                  </p>
                  <h5 className="font-[500] text-base leading-[24px] text-neutral">
                    info@connect.co.org
                  </h5>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-[36px] h-[36px] rounded-full border border-bgAccent shrink-0 flex items-center justify-center text-textColor3">
                  <FaPhoneAlt />
                </div>
                <div>
                  <p className="text-textColor3 leading-[20px] text-xs">
                    Phone Number
                  </p>
                  <h5 className="font-[500] text-base leading-[24px] text-neutral">
                    +254793 059 661
                  </h5>
                </div>
              </div>

              <div className="divider"></div>

              <div className="flex items-center gap-4">
                <a
                  href="https://fb.com/"
                  className="text-[rgb(99,92,92)]"
                  target="_blank"
                >
                  <div className="icon">
                    <FaFacebookF />
                  </div>
                </a>
                <a
                  href="https://linkedin.com/"
                  className="text-[rgb(99,92,92)]"
                  target="_blank"
                >
                  <div className="icon">
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href="https://instagram.com/"
                  className="text-[rgb(99,92,92)]"
                  target="_blank"
                >
                  <div className="icon">
                    <FaInstagram />
                  </div>
                </a>
                <a
                  href="https://youtube.com"
                  className="text-[rgb(99,92,92)]"
                  target="_blank"
                >
                  <div className="icon">
                    <AiOutlineYoutube />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Contact;
