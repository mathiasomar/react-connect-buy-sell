import { twMerge } from "tailwind-merge";

const Section = ({ children, className }) => {
  return (
    <section
      className={twMerge(
        "w-full min-h-screen pt-[50px] pb-4 even:bg-sectionBg overflow-hidden",
        className
      )}
    >
      {children}
    </section>
  );
};

export default Section;
