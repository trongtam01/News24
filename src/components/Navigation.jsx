import React, { useState, useRef, useEffect, useContext } from "react";
import {
  NavLink,
  Link,
  useLocation,
  useParams,
  useNavigate,
} from "react-router-dom";
import { UserContext } from "../context/UserContext";
import TopBar from "./TopBar";
import TopBarIcon from "./TopBarIcon";
import Header from "./Header";

const Navigation = () => {
  const { user } = useContext(UserContext);
  const location = useLocation();

  if (
    (user && user.isAuthenticated === true) ||
    location.pathname === "/" ||
    location.pathname === "/contact" ||
    location.pathname === "/blog"
  ) {
    return (
      <>
        <section className="app-topbar">
          <TopBar />
          <TopBarIcon />
        </section>
        <section className="app-header">
          <Header />
        </section>
      </>
    );
  } else {
    <></>;
  }
};

export default Navigation;
