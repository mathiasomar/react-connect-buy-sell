import { twMerge } from "tailwind-merge";

const Section = ({ children, className }) => {
  return (
    <section
      className={twMerge("w-full min-h-screen pt-[100px] pb-4", className)}
    >
      {children}
    </section>
  );
};

export default Section;
