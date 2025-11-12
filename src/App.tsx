import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar/Navbar";
import "./index.css";

const About = lazy(() => import("./components/About/About"));
const Projects = lazy(() => import("./components/Projects/Projects"));
const Experience = lazy(() => import("./components/Experience/Experience"));
const Contact = lazy(() => import("./components/contact/Contact"));

export default function App() {
  return (
    <div>
      <Navbar />

      <Suspense
        fallback={<div className="section-loading">Loading About...</div>}
      >
        <About />
      </Suspense>

      <Suspense
        fallback={<div className="section-loading">Loading Projects...</div>}
      >
        <Projects />
      </Suspense>

      <Suspense
        fallback={<div className="section-loading">Loading Experience...</div>}
      >
        <Experience />
      </Suspense>

      <Suspense
        fallback={<div className="section-loading">Loading Contact...</div>}
      >
        <Contact />
      </Suspense>
    </div>
  );
}
