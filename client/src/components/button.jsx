import { twMerge } from "tailwind-merge";

const Button = ({ children, className, type, icon, onClick, path }) => {
  return (
    <>
      {path ? (
        <a href={path}
          className={twMerge(
            `txt-xl px-[30px] py-4 rounded-md relative overflow-hidden ${
              type == "one" ? "bg-btn1 text-neutral" : "bg-btn2 text-secondary"
            }`,
            className
          )}
        >
          <div className="bg-transparent flex items-center justify-between">
            <span className="capitalize">{children}</span>
            <span className="ml-4">{icon}</span>
          </div>
        </a>
      ) : (
        <button
          className={twMerge(
            `txt-xl px-[30px] py-4 rounded-md relative overflow-hidden ${
              type == "one" ? "bg-btn1 text-neutral" : "bg-btn2 text-secondary"
            }`,
            className
          )}
          onClick={onClick}
        >
          <div className="bg-transparent flex items-center justify-between">
            <span className="capitalize">{children}</span>
            <span className="ml-4">{icon}</span>
          </div>
        </button>
      )}
    </>
  );
};

export default Button;
