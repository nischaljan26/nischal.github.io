import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ contactQr, dp, cv, firstName, lastName }) => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
        id="sideNav"
      >
        <NavLink className="navbar-brand" to="/">
          <span className="d-sm-block d-md-block d-lg-none">
            <img
              className="img-fluid img-profile rounded-circle mb-2 mr-2"
              style={{ maxWidth: "40px" }}
              src={dp}
              alt="Nischal Shrestha"
            />
            {firstName} {lastName}
          </span>
          <span className="d-none d-lg-block">
            <img
              className="img-fluid img-profile rounded-circle mx-auto mb-2"
              src={dp}
              alt="Nischal Shrestha"
            />
          </span>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active"
                exact
                to="/"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="/experience"
              >
                Experience
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="/education"
              >
                Education
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="/skills"
              >
                Skills
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="/interests"
              >
                Interests
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="/my-projects"
              >
                Projects
              </NavLink>
            </li>
            <span className="d-block">
              <li className="nav-item">
                <NavLink className="nav-link" to="/addme">
                  Contact Me
                </NavLink>
              </li>
            </span>

            <li className="nav-item">
              <a
                className="nav-link"
                target="_blank"
                rel="noreferrer"
                href={cv}
              >
                View My cv
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
