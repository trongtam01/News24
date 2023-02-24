import { Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import Blog from "../components/Blog";
import Home from "../components/Home";
import AppAdmin from "../admin/AppAdmin";
import Login from "../views/Login/Login";
import Register from "../views/Register/Register";
import PostNewsAdmin from "../admin/manages/post_news/PostNewsAdmin";
import Contact from "../views/Contact/Contact";
import ContactAdmin from "../admin/manages/contact/ContactAdmin";
import CategoryAdmin from "../admin/manages/category/CategoryAdmin";
import DetailPost from "../views/Manage/News/DetailPost";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/404" element={<NotFoundPage />} /> */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path={"/detail-post/:id"} element={<DetailPost />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<AppAdmin />} />
        <Route path="/admin/post" element={<PostNewsAdmin />} />
        <Route path="/admin/contact" element={<ContactAdmin />} />
        <Route path="/admin/category" element={<CategoryAdmin />} />
        <Route path="*" element={<Navigate replace to="/404" />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
