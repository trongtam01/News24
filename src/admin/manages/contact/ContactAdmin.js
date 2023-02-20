import React from "react";
import "./ContactAdmin.scss";
import SidebarAdmin from "../../sidebar/SidebarAdmin";
import NavAdmin from "../../navbar/NavAdmin";
import ManageContact from "../../../views/Manage/Contact/ManageContact";

const ContactAdmin = () => {
  return (
    <div className="post">
      <SidebarAdmin />
      <div className="post-container">
        <NavAdmin />
        <div className="post-user">
          <ManageContact />
        </div>
      </div>
    </div>
  );
};

export default ContactAdmin;
