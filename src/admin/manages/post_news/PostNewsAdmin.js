import React from "react";
import "./PostNewsAdmin.scss";
import SidebarAdmin from "../../sidebar/SidebarAdmin";
import NavAdmin from "../../navbar/NavAdmin";
import ManagePost from "../../../views/Manage/Post/ManagePost";

const PostNewsAdmin = () => {
  return (
    <div className="post">
      <SidebarAdmin />
      <div className="post-container">
        <NavAdmin />
        <div className="post-user">
          <ManagePost />
        </div>
      </div>
    </div>
  );
};

export default PostNewsAdmin;
