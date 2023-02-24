import React, { useContext } from "react";
import { useLocation, useParams } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import TopBar from "./TopBar";
import TopBarIcon from "./TopBarIcon";
import Header from "./Header";

const Navigation = () => {
  const { id } = useParams();

  const { user } = useContext(UserContext);

  const location = useLocation();

  console.log("id", id);

  if (
    (user && user.isAuthenticated === true) ||
    location.pathname === "/" ||
    location.pathname === "/contact" ||
    location.pathname === "/blog" ||
    location.pathname === `/detail-post/${id}`
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
