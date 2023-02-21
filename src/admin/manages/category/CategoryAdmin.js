import React from "react";
import "./CategoryAdmin.scss";
import SidebarAdmin from "../../sidebar/SidebarAdmin";
import NavAdmin from "../../navbar/NavAdmin";
import ManageCategory from "../../../views/Manage/Category/ManageCategory";

const CategoryAdmin = () => {
  return (
    <div className="post">
      <SidebarAdmin />
      <div className="post-container">
        <NavAdmin />
        <div className="post-user">
          <ManageCategory />
        </div>
      </div>
    </div>
  );
};

export default CategoryAdmin;
