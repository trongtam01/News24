import React, { useEffect, useState } from "react";
import { fetchPost } from "../services/postService";
import { fetchCategory } from "../services/categoryService";
import Trending from "../views/Trending/Trending";
import News from "../views/Manage/News/News";

const Home = () => {
  const [dataPost, setDataPost] = useState([]);
  const [dataCategory, setDataCategory] = useState([]);

  useEffect(() => {
    fetchAllPost();
    fetchAllCategory();
  }, []);

  async function fetchAllPost() {
    const res = await fetchPost();
    setDataPost(res);
  }

  async function fetchAllCategory() {
    const res = await fetchCategory();
    setDataCategory(res);
  }

  return (
    <>
      {/* <Trending dataPost={dataPost} /> */}
      <News dataPost={dataPost} dataCategory={dataCategory} />
    </>
  );
};

export default Home;
