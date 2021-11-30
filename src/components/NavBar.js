import React from "react";
import "bootstrap/js/src/collapse.js";

const NavBar = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-sm  mt-0 mt-sm-2 ">
      <div className="container">
        <button
          className="navbar-toggler navbarToggle ms-3"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navmenu"
          aria-controls="navmenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </button>
        <div className="collapse navbar-collapse ms-4 ms-sm-0" id="navmenu">
          <ul className="navbar-nav me-auto gap-3 gap-sm-5">
            <li className="nav-item mt-3 mt-sm-0">
              <a href="#home" className="nav-link">
                home.
              </a>
            </li>
            <li className="nav-item ">
              <a href="#aboutme" className="nav-link">
                about.
              </a>
            </li>
            <li className="nav-item ">
              <a href="#myskills" className="nav-link">
                skills.
              </a>
            </li>
            <li className="nav-item ">
              <a href="#myprojects" className="nav-link">
                projects.
              </a>
            </li>
            <li className="nav-item">
              <a href="#contactme" className="nav-link">
                contact.
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
