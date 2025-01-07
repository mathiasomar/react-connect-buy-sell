import { twMerge } from "tailwind-merge";

const Section = ({ children, className }) => {
  return (
    <section
      className={twMerge(
        "w-full pt-[100px] pb-[3rem] even:bg-sectionBg overflow-hidden",
        className
      )}
    >
      {children}
    </section>
  );
};

export default Section;
