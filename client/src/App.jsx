import { Routes, Route } from "react-router-dom";
// import Home from "./scenes/Home";
import Layout from "./Layout";
// import Listings from "./scenes/Listings";
// import Login from "./scenes/Login";
// import Register from "./scenes/Register";
import { lazy, Suspense } from "react";
import Loading from "./components/loading";

const Home = lazy(() => delayForLoading(import("./scenes/Home")));
const Listings = lazy(() => delayForLoading(import("./scenes/Listings")));
const Membership = lazy(() => delayForLoading(import("./scenes/Membership")));
const Contact = lazy(() => delayForLoading(import("./scenes/Contact")));
const About = lazy(() => delayForLoading(import("./scenes/About")));
const PostAd = lazy(() => delayForLoading(import("./scenes/PostAd")));
const ViewListing = lazy(() => delayForLoading(import("./scenes/ViewListing")));
const Blog = lazy(() => delayForLoading(import("./scenes/pages/Blog")));
const Privacy = lazy(() => delayForLoading(import("./scenes/pages/Privacy")));
const Terms = lazy(() => delayForLoading(import("./scenes/pages/Terms")));
const Faq = lazy(() => delayForLoading(import("./scenes/pages/faq")));
const Safety = lazy(() => delayForLoading(import("./scenes/pages/safety")));
const Login = lazy(() => delayForLoading(import("./scenes/Login")));
const Register = lazy(() => delayForLoading(import("./scenes/Register")));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <Suspense fallback={<Loading />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="about"
          element={
            <Suspense fallback={<Loading />}>
              <About />
            </Suspense>
          }
        />
        <Route
          path="listing"
          element={
            <Suspense fallback={<Loading />}>
              <Listings />
            </Suspense>
          }
        />
        <Route
          path="membership"
          element={
            <Suspense fallback={<Loading />}>
              <Membership />
            </Suspense>
          }
        />
        <Route
          path="post_ads"
          element={
            <Suspense fallback={<Loading />}>
              <PostAd />
            </Suspense>
          }
        />
        <Route
          path="view-list"
          element={
            <Suspense fallback={<Loading />}>
              <ViewListing />
            </Suspense>
          }
        />
        <Route
          path="blog"
          element={
            <Suspense fallback={<Loading />}>
              <Blog />
            </Suspense>
          }
        />
        <Route
          path="privacy"
          element={
            <Suspense fallback={<Loading />}>
              <Privacy />
            </Suspense>
          }
        />
        <Route
          path="terms"
          element={
            <Suspense fallback={<Loading />}>
              <Terms />
            </Suspense>
          }
        />
        <Route
          path="faq"
          element={
            <Suspense fallback={<Loading />}>
              <Faq />
            </Suspense>
          }
        />
        <Route
          path="safety"
          element={
            <Suspense fallback={<Loading />}>
              <Safety />
            </Suspense>
          }
        />
        <Route
          path="contact"
          element={
            <Suspense fallback={<Loading />}>
              <Contact />
            </Suspense>
          }
        />
        <Route
          path="login"
          element={
            <Suspense fallback={<Loading />}>
              <Login />
            </Suspense>
          }
        />
        <Route
          path="register"
          element={
            <Suspense fallback={<Loading />}>
              <Register />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

function delayForLoading(promise) {
  return new Promise((resolve) => {
    setTimeout(resolve, 1500);
  }).then(() => promise);
}

export default App;
