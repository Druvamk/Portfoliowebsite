import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <h1 className="logo">
          Druva <span>MK</span>
        </h1>
        <ul className="nav-links">
          <li>
            <Link
              to="about"
              smooth={true}
              duration={600}
              offset={-70}
              className="nav-link"
              spy={true}
              activeClass="active"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="projects"
              smooth={true}
              duration={600}
              offset={-70}
              className="nav-link"
              spy={true}
              activeClass="active"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="experience"
              smooth={true}
              duration={600}
              offset={-70}
              className="nav-link"
              spy={true}
              activeClass="active"
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={600}
              offset={-70}
              className="nav-link"
              spy={true}
              activeClass="active"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
