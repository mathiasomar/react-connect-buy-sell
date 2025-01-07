import { GiCheckMark } from "react-icons/gi";
import Container from "../components/Container";
import Section from "../components/section";
import Title from "../components/title";
import { membership } from "../constants";
import { useEffect, useRef } from "react";
import { useAnimation, useInView, motion } from "framer-motion";

const Membership = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  return (
    <Section className="min-h-screen">
      <Title
        topText="Select your membership plan ans start posting ads"
        bottomText="Membership"
      />

      <Container className="mt-14">
        <motion.div
          ref={ref}
          variants={{
            hidden: {
              x: -100,
              opacity: 0,
            },
            visible: {
              x: 0,
              opacity: 1,
              transition: {
                duration: 0.85,
              },
            },
          }}
          initial="hidden"
          animate={mainControls}
          className="w-full grid grid-cols-12 gap-6"
        >
          {membership.map(
            ({
              id,
              plan,
              price,
              listing,
              galleryImagesPerListing,
              featuredListing,
              businessHourNotAllowed,
              enquiryFormNotAllowed,
              membershipBadgeNotAllowed,
            }) => (
              <div
                key={id}
                className="xl:col-span-3 lg:col-span-3 md:col-span-4 sm:col-span-6 p-[20px] border-2 border-bgAccent rounded-xl bg-white shadow-md hover:border-primary transition-colors duration-500 group"
              >
                <h1 className="text-base font-bold leading-[24px] mb-[15px] text-slate-800">
                  {plan}
                </h1>
                <div className="font-[600] text-xl leading-[28px] mb-[16px]">
                  <span className="group-hover:text-primary transition-colors duration-500">
                    Ksh.{price}
                  </span>{" "}
                  <span className="text-fadeText text-base">{plan}</span>
                </div>

                <div className="mb-[20px]">
                  <button className="text-sm font-[500] px-[15px] py-[8px] text-overlay border border-bgAccent cursor-pointer rounded-[8px] bg-none w-full text-center relative group-hover:border-primary group-hover:bg-primary group-hover:text-secondary transition-colors duration-500">
                    {plan === "Free" ? "Get Started" : "Buy Now"}
                  </button>
                </div>

                <ul className="m-0 p-0">
                  <li
                    className={`text-neutral flex items-center text-sm font-semibold mb-[22px]`}
                  >
                    <span className="mr-[0.5rem]">
                      <GiCheckMark className="text-green-600 text-base" />
                    </span>
                    <span>{`Listing ${listing}`}</span>
                  </li>
                  <li
                    className={`text-neutral flex items-center text-sm font-semibold mb-[22px]`}
                  >
                    <span className="mr-[0.5rem]">
                      <GiCheckMark className="text-green-600 text-base" />
                    </span>
                    <span>{`Gallery Images Per Listing ${galleryImagesPerListing}`}</span>
                  </li>
                  <li
                    className={`flex items-center text-sm font-semibold mb-[22px] ${
                      featuredListing > 0 ? "text-neutral" : "text-fadeText"
                    }`}
                  >
                    <span
                      className={`mr-[0.5rem] ${
                        featuredListing > 0 ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <GiCheckMark className="text-green-600 text-base" />
                    </span>
                    <span>{`Featured Listing ${featuredListing}`}</span>
                  </li>
                  <li
                    className={`flex items-center text-sm font-semibold mb-[22px] ${
                      businessHourNotAllowed ? "text-fadeText" : "text-neutral"
                    }`}
                  >
                    <span
                      className={`mr-[0.5rem] ${
                        businessHourNotAllowed ? "opacity-0" : "opacity-100"
                      }`}
                    >
                      <GiCheckMark className="text-green-600 text-base" />
                    </span>
                    <span>Business Hour Allowed</span>
                  </li>
                  <li
                    className={`flex items-center text-sm font-semibold mb-[22px] ${
                      enquiryFormNotAllowed ? "text-fadeText" : "text-neutral"
                    }`}
                  >
                    <span
                      className={`mr-[0.5rem] ${
                        enquiryFormNotAllowed ? "opacity-0" : "opacity-100"
                      }`}
                    >
                      <GiCheckMark className="text-green-600 text-base" />
                    </span>
                    <span>Enquiry Form Not Allowed</span>
                  </li>
                  <li
                    className={`flex items-center text-sm font-semibold mb-[22px] ${
                      membershipBadgeNotAllowed
                        ? "text-fadeText"
                        : "text-neutral"
                    }`}
                  >
                    <span
                      className={`mr-[0.5rem] ${
                        membershipBadgeNotAllowed ? "opacity-0" : "opacity-100"
                      }`}
                    >
                      <GiCheckMark className="text-green-600 text-base" />
                    </span>
                    <span>Membership Badge Not Allowed</span>
                  </li>
                </ul>
              </div>
            )
          )}
        </motion.div>
      </Container>
    </Section>
  );
};

export default Membership;
