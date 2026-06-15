import { Link, NavLink ,useLocation} from "react-router-dom";
import { useEffect, useState } from "react";

import logo from "../../../assets/logos/Logo.png";

import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

    const isAdminRoute =
    location.pathname.startsWith("/admin");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

    if (isAdminRoute) return null;

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${scrolled ? "navbar-scrolled" : ""
        }`}
    >
      <div className="container">

        <Link className="navbar-brand" to="/">
          <img
            src={logo}
            alt="InSyllabus Softwares"
            className="navbar-logo"
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarContent"
        >
          <ul className="navbar-nav mx-auto">

            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/about" className="nav-link">
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/products" className="nav-link">
                Products
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/services" className="nav-link">
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/careers" className="nav-link">
                Careers
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/contact" className="nav-link">
                Contact
              </NavLink>
            </li>

          </ul>

          <Link
            to="/contact"
            className="btn btn-gradient"
          >
            Book Consultation
          </Link>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;