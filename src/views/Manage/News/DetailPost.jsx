import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPostById } from "../../../services/postService";
import { fetchCategory } from "../../../services/categoryService";

const DetailPost = () => {
  const { id } = useParams();

  const [detailPostData, setDetailPostData] = useState({});
  const [dataCategory, setDataCategory] = useState([]);

  useEffect(() => {
    getDetailPost();
    fetchAllCategory();
  }, [id]);

  async function getDetailPost() {
    if (id) {
      let res = await getPostById(id);
      setDetailPostData(res);
    }
  }

  async function fetchAllCategory() {
    const res = await fetchCategory();
    setDataCategory(res);
  }

  return (
    <div className="single">
      <div
        id="fh5co-title-box"
        style={{
          backgroundImage: "url(" + detailPostData.imageSrc + ")",
          backgroundPosition: "50% 90.5px",
        }}
        data-stellar-background-ratio="0.5"
      >
        <div className="overlay"></div>
        <div className="page-title">
          <span>{detailPostData.dateCreated}</span>
          <h2>{detailPostData.title}</h2>
        </div>
      </div>
      <div
        id="fh5co-single-content"
        className="container-fluid pb-4 pt-4 paddding"
      >
        <div className="container paddding">
          <div className="row mx-0">
            <div
              className="col-md-8 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <p>
                <p>{detailPostData.content}</p>
              </p>
            </div>
            <div
              className="col-md-3 animate-box"
              data-animate-effect="fadeInRight"
            >
              <div>
                <div className="fh5co_heading fh5co_heading_border_bottom py-2 mb-4">
                  Categories
                </div>
              </div>
              <div className="clearfix"></div>
              <div className="fh5co_tags_all">
                {dataCategory &&
                  dataCategory.length > 0 &&
                  dataCategory.map((item, index) => (
                    <a key={index} href="#" className="fh5co_tagg">
                      {item.title}
                    </a>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPost;
