import React, { useContext } from "react";
import "./SidebarAdmin.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { Link, useLocation, useHistory } from "react-router-dom";

const SidebarAdmin = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/admin">
          <span className="logo">lAdmin</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/">
            <li>
              <DashboardIcon className="icon" />
              <span>Home</span>
            </li>
          </Link>
          <p className="title">POST</p>
          <Link to="/admin/post">
            <li>
              <DashboardIcon className="icon" />
              <span>POST</span>
            </li>
          </Link>
          <Link to="/admin/category">
            <li>
              <DashboardIcon className="icon" />
              <span>CATEGORY</span>
            </li>
          </Link>
          <p className="title">CONTACT</p>
          <Link to="/admin/contact">
            <li>
              <DashboardIcon className="icon" />
              <span>CONTACT</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default SidebarAdmin;
