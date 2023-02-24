import React from "react";
import { Link, useNavigate } from "react-router-dom";

const News = (props) => {
  const { dataPost, dataCategory } = props;

  const navigate = useNavigate();

  const handleDetailPost = (data) => {
    navigate(`/detail-post/${data.id}`);
  };

  return (
    <div className="container-fluid pb-4 pt-4 paddding">
      <div className="container paddding">
        <div className="row mx-0">
          <div
            className="col-md-8 animate-box"
            data-animate-effect="fadeInLeft"
          >
            <div>
              <div className="fh5co_heading fh5co_heading_border_bottom py-2 mb-4">
                News
              </div>
            </div>
            {dataPost &&
              dataPost.length > 0 &&
              dataPost.map((item, index) => (
                <div key={index} className="row pb-4">
                  <div className="col-md-5">
                    <div className="fh5co_hover_news_img">
                      <div className="fh5co_news_img">
                        <img src={item.imageSrc} alt="" />
                      </div>
                      <div></div>
                    </div>
                  </div>
                  <div className="col-md-7 animate-box">
                    <a
                      onClick={() => handleDetailPost(item)}
                      className="fh5co_magna py-2"
                    >
                      {item.title}
                    </a>
                    <a href="#" className="fh5co_mini_time py-3">
                      {item.dateUpdated}
                    </a>
                    <div className="fh5co_consectetur">{item.description}</div>
                  </div>
                </div>
              ))}
          </div>
          <div
            className="col-md-3 animate-box"
            data-animate-effect="fadeInRight"
          >
            <div>
              <div className="fh5co_heading fh5co_heading_border_bottom py-2 mb-4">
                Tags
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
  );
};

export default News;
