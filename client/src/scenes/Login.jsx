import { FcGoogle } from "react-icons/fc";
import Container from "../components/Container";
import Section from "../components/section";
import { useEffect } from "react";
import PageHeader from "../components/pageHeader";

const Login = () => {
  useEffect(() => {
    document.title = "Connect | Login";
  }, []);
  return (
    <Section className="min-h-screen">
      <Container>
        <PageHeader page="Sign In" />
      </Container>

      <Container className="w-full h-full flex items-center justify-center my-[100px]">
        <div className="grid grid-cols-12 shadow-md">
          <div className="xl:col-span-5 lg:col-span-5 overflow-hidden relative h-full w-full">
            <div className="bg-[#FFF3EC] px-[80px] py-[60px] text-center h-full">
              <div className="mb-[100px]">
                <h3 className="title">Buy & sell anything</h3>
                <p className="para">
                  Buy & sell anything with ease. Enjoy a seamless experience and
                  connect with buyers and sellers in just a few clicks.
                </p>
              </div>
              <div className="text-center">
                <img
                  src="images/media/login1708750583.png"
                  className="max-w-full h-auto align-middle object-cover"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="xl:col-span-7 lg:col-span-7 py-[40px] px-[75px] bg-white flex justify-center">
            <form className="w-full flex flex-col" autoComplete="off">
              <div className="w-full mb-4">
                <label
                  htmlFor="email"
                  className="text-base font-semibold text-textAccent"
                >
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter email address"
                  className="outline-none border border-bgAccent w-full placeholder:text-fadeText placeholder:text-sm text-base px-2 rounded-md h-[50px] transition-colors duration-500 focus:border-primary"
                />
              </div>
              <div className="w-full mb-4">
                <label
                  htmlFor="password"
                  className="text-base font-semibold text-textAccent"
                >
                  Password <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="**************"
                  className="outline-none border border-bgAccent w-full placeholder:text-fadeText placeholder:text-sm text-base px-2 rounded-md h-[50px] transition-colors duration-500 focus:border-primary"
                />
              </div>

              <div className="w-full text-center">
                <button
                  type="submit"
                  className="w-full bg-primary capitalize rounded-md h-[50px] text-secondary"
                >
                  Sign In
                </button>
                <span className="my-10">or</span>
                <button
                  type="submit"
                  className="w-full bg-transparent rounded-md h-[50px] text-neutral border"
                >
                  <span className="flex items-center justify-center">
                    <span>
                      <FcGoogle />
                    </span>
                    <span className="ml-2">Sign In with google</span>
                  </span>
                </button>
              </div>

              <div className="mt-10 w-full text-center">
                <p>
                  Don&apos;t have an account?{" "}
                  <a href="/register" className="text-primary">
                    Sign Up Now
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Login;
