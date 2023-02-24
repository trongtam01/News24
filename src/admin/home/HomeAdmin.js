import React from "react";
import "./HomeAdmin.scss";
import SidebarAdmin from "../sidebar/SidebarAdmin";
import NavAdmin from "../navbar/NavAdmin";
import WidgetAdmin from "../widget/WidgetAdmin";

const HomeAdmin = () => {
  return (
    <div className="home">
      <SidebarAdmin />
      <div className="homeContainer">
        <div className="home-navbar">
          <NavAdmin />
        </div>
        <div className="widgets">
          Welcome to Admin!
          {/* <WidgetAdmin type="user" />
                    <WidgetAdmin type="post" />
                    <WidgetAdmin type="feedback" /> */}
        </div>
      </div>
    </div>
  );
};

export default HomeAdmin;
