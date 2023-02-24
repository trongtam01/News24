import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="container-fluid bg-faded fh5co_padd_mediya padding_786">
      <div className="container padding_786">
        <nav className="navbar navbar-toggleable-md navbar-light">
          <button
            className="navbar-toggler navbar-toggler-right mt-3"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="fa fa-bars"></span>
          </button>
          <a className="navbar-brand" href="#">
            <img
              src="images/logo.png"
              alt="img"
              className="mobile_logo_width"
            />
          </a>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link">
                  Contact <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/admin" className="nav-link">
                  Admin <span className="sr-only">(current)</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
