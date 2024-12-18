import { twMerge } from "tailwind-merge";

const Section = ({ children, className, ref }) => {
  return (
    <section
      ref={ref}
      className={twMerge(
        "w-full min-h-screen pt-[50px] even:bg-sectionBg",
        className
      )}
    >
      {children}
    </section>
  );
};

export default Section;
