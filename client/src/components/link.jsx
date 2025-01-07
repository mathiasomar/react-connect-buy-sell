import { twMerge } from "tailwind-merge";

const LinkCustom = ({ children, path, type = "main", className }) => {
  return (
    <a
      href={path}
      className={twMerge(
        `text-secondary capitalize ${
          type === "main" ? "ml-4" : ""
        } py-4 text-base font-semibold relative before:content-[''] before:absolute before:w-[10px] before:h-[10px] before:${
          type === "main" ? "bg-primary" : "bg-accent"
        } before:rounded-full before:top-1/2 before:-translate-y-1/2 before:-left-10 before:transition-all before:ease-in-out before:duration-300 before:opacity-0 hover:${
          type === "main" ? "" : "text-accent"
        } transition-colors duration-300 hover:before:-left-4 hover:before:opacity-100`,
        className
      )}
    >
      {children}
    </a>
  );
};

export default LinkCustom;
