import About from "./components/About/About";
import Contact from "./components/contact/Contact";
import Experience from "./components/Experience/Experience";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import "./index.css";

export default function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}
