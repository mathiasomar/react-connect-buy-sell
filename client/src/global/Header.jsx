import { FaAngleDown } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
import Container from "../components/Container";
import Button from "../components/button";
import { useState } from "react";
import LinkCustom from "../components/link";

const Header = () => {
  const [headerBg, setHeaderBg] = useState(false);

  window.onscroll = () => {
    if (window.scrollY > 100) {
      setHeaderBg(true);
    } else {
      setHeaderBg(false);
    }
  };
  return (
    <header
      className={`w-screen h-[90px] ${
        headerBg ? "bg-neutral" : "header-bg"
      } fixed z-50 top-0 left-0 transition-colors duration-500`}
    >
      <Container className="py-4 flex items-center justify-between">
        <a href="/" className="font-bold">
          <img src="images/logo.png" alt="" className="w-[112px]" />
        </a>

        <ul className="flex items-center gap-6">
          <li>
            <LinkCustom path="/" type="main">
              Home
            </LinkCustom>
          </li>
          <li>
            <LinkCustom path="/about" type="main">
              about
            </LinkCustom>
          </li>
          <li>
            <LinkCustom path="/listing" type="main">
              Listing
            </LinkCustom>
          </li>
          <li>
            <LinkCustom path="/membership" type="main">
              membership
            </LinkCustom>
          </li>
          <li className="relative cursor-pointer group">
            <div className="flex items-center gap-2 py-4 text-base font-semibold text-secondary">
              <span>Pages</span>
              <FaAngleDown />
            </div>

            <ul className="absolute hidden group-hover:block border-b-8 border-primary text-left min-w-[220px] m-0 p-0 left-0 top-[100%] bg-white z-50 transition-transform duration-500">
              <li className="block ml-0 leading-[24px] text-sm border-b border-bgAccent">
                <a
                  href="/blog"
                  className="capitalize font-semibold block px-[30px] py-[10px] bg-white whitespace-nowrap text-[#333333] hover:bg-primary hover:text-secondary transition-colors duration-500"
                >
                  blog
                </a>
              </li>
              <li className="block ml-0 leading-[24px] text-sm border-b border-bgAccent">
                <a
                  href="/privacy"
                  className="capitalize font-semibold block px-[30px] py-[10px] bg-white whitespace-nowrap text-[#333333] hover:bg-primary hover:text-secondary transition-colors duration-500"
                >
                  privacy policy
                </a>
              </li>
              <li className="block ml-0 leading-[24px] text-sm border-b border-bgAccent">
                <a
                  href="/terms"
                  className="capitalize font-semibold block px-[30px] py-[10px] bg-white whitespace-nowrap text-[#333333] hover:bg-primary hover:text-secondary transition-colors duration-500"
                >
                  terms and conditions
                </a>
              </li>
              <li className="block ml-0 leading-[24px] text-sm border-b border-bgAccent">
                <a
                  href="/faq"
                  className="capitalize font-semibold block px-[30px] py-[10px] bg-white whitespace-nowrap text-[#333333] hover:bg-primary hover:text-secondary transition-colors duration-500"
                >
                  FAQ
                </a>
              </li>
              <li className="block ml-0 leading-[24px] text-sm">
                <a
                  href="/safety"
                  className="capitalize font-semibold block px-[30px] py-[10px] bg-white whitespace-nowrap text-[#333333] hover:bg-primary hover:text-secondary transition-colors duration-500"
                >
                  safety information
                </a>
              </li>
            </ul>
          </li>
          <li>
            <LinkCustom path="/contact" type="main">
              contact
            </LinkCustom>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          {/* <div>
            <select
              name=""
              id=""
              className="bg-inherit outline-none border-none text-base text-secondary font-semibold uppercase"
            >
              <option value="USD">USD</option>
              <option value="KES">KES</option>
            </select>
          </div> */}

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <div className="text-secondary text-2xl font-light">
                <FaRegUserCircle />
              </div>
              <a
                href="/login"
                className="text-base text-secondary font-semibold capitalize"
              >
                Log in
              </a>
            </div>
            <div className="text-secondary font-semibold">|</div>
            <a
              href="/register"
              className="text-base text-secondary font-semibold capitalize"
            >
              Register
            </a>
          </div>

          <Button type="one" icon={<AiOutlinePlus />} path="/post_ads">
            post your ad
          </Button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
