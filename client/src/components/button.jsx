import { twMerge } from "tailwind-merge";

const Button = ({ children, className, type }) => {
  return (
    <button
      className={twMerge(
        `txt-xl px-[30px] py-2 rounded-md relative overflow-hidden ${
          type == "one" ? "bg-btn1 text-neutral" : "bg-btn2 text-secondary"
        }`,
        className
      )}
    >
      <div className="bg-transparent flex items-center justify-between">
        {children}
      </div>
    </button>
  );
};

export default Button;
