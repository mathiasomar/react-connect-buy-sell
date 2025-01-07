import { FaAngleRight } from "react-icons/fa";
const PageHeader = ({ page }) => {
  return (
    <div className="w-full mx-auto mt-[50px]">
      <div className="">
        <nav className="bg-pageBg px-[11px] py-[12px] box-border outline-none">
          <ul className="flex flex-wrap">
            <li className="p-0 leading-[1]">
              <a
                href="/"
                className="capitalize leading-[1] font-[400] text-fadeText"
              >
                home
              </a>
            </li>
            <li className="p-0 leading-[1] font-bold mx-[5px]">
              <FaAngleRight />
            </li>
            <li className="p-0 leading-[1]">
              <a
                href="#"
                className="capitalize leading-[1] font-[400] text-neutral"
              >
                {page}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default PageHeader;
