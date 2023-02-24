import React, { useContext, useState, useEffect } from "react";
import logoFooter from "../assets/images/white_logo.png";
import { Link, useLocation, useParams } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { fetchCategory } from "../services/categoryService";
import tipik from "../assets/images/footer_sub_tipik.png";

const Footer = () => {
  const { id } = useParams();

  const { user } = useContext(UserContext);

  const location = useLocation();

  const [dataCategory, setDataCategory] = useState([]);

  useEffect(() => {
    fetchAllCategory();
  }, []);

  async function fetchAllCategory() {
    const res = await fetchCategory();
    setDataCategory(res);
  }

  if (
    (user && user.isAuthenticated === true) ||
    location.pathname === "/" ||
    location.pathname === "/contact" ||
    location.pathname === "/blog" ||
    location.pathname === `/detail-post/${id}`
  ) {
    return (
      <>
        <div className="container-fluid fh5co_footer_bg pb-3">
          <div className="container animate-box">
            <div className="row">
              <div className="col-12 spdp_right py-5">
                <img src={logoFooter} alt="img" className="footer_logo" />
              </div>
              <div className="clearfix"></div>
              <div className="col-12 col-md-4 col-lg-7">
                <div className="footer_main_title py-3">About</div>
                <div className="footer_sub_about pb-3">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </div>
                <div className="footer_mediya_icon">
                  <div className="text-center d-inline-block">
                    <a className="fh5co_display_table_footer">
                      <div className="fh5co_verticle_middle">
                        <i className="fa fa-linkedin"></i>
                      </div>
                    </a>
                  </div>
                  <div className="text-center d-inline-block">
                    <a className="fh5co_display_table_footer">
                      <div className="fh5co_verticle_middle">
                        <i className="fa fa-google-plus"></i>
                      </div>
                    </a>
                  </div>
                  <div className="text-center d-inline-block">
                    <a className="fh5co_display_table_footer">
                      <div className="fh5co_verticle_middle">
                        <i className="fa fa-twitter"></i>
                      </div>
                    </a>
                  </div>
                  <div className="text-center d-inline-block">
                    <a className="fh5co_display_table_footer">
                      <div className="fh5co_verticle_middle">
                        <i className="fa fa-facebook"></i>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-3 col-lg-2">
                <div className="footer_main_title py-3">Category</div>
                <ul className="footer_menu">
                  {dataCategory &&
                    dataCategory.length > 0 &&
                    dataCategory.map((item, index) => (
                      <li key={index}>
                        <a href="#" className="">
                          <i className="fa fa-angle-right"></i>&nbsp;&nbsp;{" "}
                          {item.title}
                        </a>
                      </li>
                    ))}
                </ul>
              </div>
              <div className="col-12 col-md-5 col-lg-3 position_footer_relative">
                <div className="footer_main_title py-3">Most Viewed Posts</div>
                <div className="footer_makes_sub_font">Dec 31, 2016</div>
                <a href="#" className="footer_post pb-4">
                  Success is not a good teacher failure makes you humble
                </a>
                <div className="footer_makes_sub_font">Dec 31, 2016</div>
                <a href="#" className="footer_post pb-4">
                  Success is not a good teacher failure makes you humble
                </a>
                <div className="footer_makes_sub_font">Dec 31, 2016</div>
                <a href="#" className="footer_post pb-4">
                  Success is not a good teacher failure makes you humble
                </a>
                <div className="footer_position_absolute">
                  <img src={tipik} alt="img" className="width_footer_sub_img" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid fh5co_footer_right_reserved">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 py-4 Reserved">
                © Copyright 2018, All rights reserved. Design by
                <a href="#" title="Free HTML5 Bootstrap templates">
                  &nbsp; Nguyen Trong Tam
                </a>
                .
              </div>
              <div className="col-12 col-md-6 spdp_right py-4">
                <Link to="/" className="footer_last_part_menu">
                  Home
                </Link>
                <Link to="/blog" className="footer_last_part_menu">
                  BLog
                </Link>
                <Link to="/contact" className="footer_last_part_menu">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    <></>;
  }
};

export default Footer;
