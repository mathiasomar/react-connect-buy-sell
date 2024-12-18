import { AiOutlinePlus } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
import Container from "../components/Container";
import Button from "../components/button";

const Header = () => {
  return (
    <header className="w-screen h-[90px] bg-transparent fixed z-50 top-0 left-0 bg-black">
      <Container className="py-4 flex items-center justify-between">
        <a href="/" className="font-bold">
          <img src="images/logo.png" alt="" className="w-[112.7px]" />
        </a>

        <ul className="flex items-center gap-6">
          <li>
            <a
              href="/"
              className="text-secondary capitalize ml-4 py-4 text-base font-semibold relative before:content-[''] before:absolute before:w-[10px] before:h-[10px] before:bg-primary before:rounded-full before:top-1/2 before:-translate-y-1/2 before:-left-10 before:transition-all before:ease-in-out before:duration-300 before:opacity-0 hover:before:-left-4 hover:before:opacity-100"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/listing"
              className="text-secondary capitalize ml-4 py-4 text-base font-semibold relative before:content-[''] before:absolute before:w-[10px] before:h-[10px] before:bg-primary before:rounded-full before:top-1/2 before:-translate-y-1/2 before:-left-10 before:transition-all before:ease-in-out before:duration-300 before:opacity-0 hover:before:-left-4 hover:before:opacity-100"
            >
              Listing
            </a>
          </li>
          <li>
            <a
              href="/featured"
              className="text-secondary capitalize ml-4 py-4 text-base font-semibold relative before:content-[''] before:absolute before:w-[10px] before:h-[10px] before:bg-primary before:rounded-full before:top-1/2 before:-translate-y-1/2 before:-left-10 before:transition-all before:ease-in-out before:duration-300 before:opacity-0 hover:before:-left-4 hover:before:opacity-100"
            >
              Featured
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="text-secondary capitalize ml-4 py-4 text-base font-semibold relative before:content-[''] before:absolute before:w-[10px] before:h-[10px] before:bg-primary before:rounded-full before:top-1/2 before:-translate-y-1/2 before:-left-10 before:transition-all before:ease-in-out before:duration-300 before:opacity-0 hover:before:-left-4 hover:before:opacity-100"
            >
              about us
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="text-secondary capitalize ml-4 py-4 text-base font-semibold relative before:content-[''] before:absolute before:w-[10px] before:h-[10px] before:bg-primary before:rounded-full before:top-1/2 before:-translate-y-1/2 before:-left-10 before:transition-all before:ease-in-out before:duration-300 before:opacity-0 hover:before:-left-4 hover:before:opacity-100"
            >
              contact us
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <div>
            <select
              name=""
              id=""
              className="bg-inherit outline-none border-none text-base text-secondary font-semibold uppercase"
            >
              <option value="USD">USD</option>
              <option value="KES">KES</option>
            </select>
          </div>

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

          <Button type="one">
            <span className="capitalize">post your ad</span>
            <span className="ml-4">
              <AiOutlinePlus />
            </span>
          </Button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
