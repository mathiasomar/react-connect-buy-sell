import { twMerge } from "tailwind-merge";

const Button = ({ children, className }) => {
  return (
    <button className={twMerge("txt-xl px-[30px] py-2 rounded-md", className)}>
      {children}
    </button>
  );
};

export default Button;
