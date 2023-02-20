import React, { useState, useRef, useEffect, useContext } from "react";
import logoFooter from "../assets/images/white_logo.png";
import {
  NavLink,
  Link,
  useLocation,
  useParams,
  useNavigate,
} from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Footer = () => {
  const { user } = useContext(UserContext);

  const location = useLocation();

  if (
    (user && user.isAuthenticated === true || location.pathname === "/") ||
    location.pathname === "/contact" ||
    location.pathname === "/blog"
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
              <div className="col-12 col-md-4 col-lg-3">
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
                  <li>
                    <a href="#" className="">
                      <i className="fa fa-angle-right"></i>&nbsp;&nbsp; Business
                    </a>
                  </li>
                  <li>
                    <a href="#" className="">
                      <i className="fa fa-angle-right"></i>&nbsp;&nbsp;
                      Entertainment
                    </a>
                  </li>
                  <li>
                    <a href="#" className="">
                      <i className="fa fa-angle-right"></i>&nbsp;&nbsp;
                      Environment
                    </a>
                  </li>
                  <li>
                    <a href="#" className="">
                      <i className="fa fa-angle-right"></i>&nbsp;&nbsp; Health
                    </a>
                  </li>
                  <li>
                    <a href="#" className="">
                      <i className="fa fa-angle-right"></i>&nbsp;&nbsp; Life
                      style
                    </a>
                  </li>
                  <li>
                    <a href="#" className="">
                      <i className="fa fa-angle-right"></i>&nbsp;&nbsp; Politics
                    </a>
                  </li>
                  <li>
                    <a href="#" className="">
                      <i className="fa fa-angle-right"></i>&nbsp;&nbsp;
                      Technology
                    </a>
                  </li>
                  <li>
                    <a href="#" className="">
                      <i className="fa fa-angle-right"></i>&nbsp;&nbsp; World
                    </a>
                  </li>
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
                  <img
                    src="images/footer_sub_tipik.png"
                    alt="img"
                    className="width_footer_sub_img"
                  />
                </div>
              </div>
              <div className="col-12 col-md-12 col-lg-4">
                <div className="footer_main_title py-3">
                  Last Modified Posts
                </div>
                <a href="#" className="footer_img_post_6">
                  <img src="images/allef-vinicius-108153.jpg" alt="img" />
                </a>
                <a href="#" className="footer_img_post_6">
                  <img src="images/32-450x260.jpg" alt="img" />
                </a>
                <a href="#" className="footer_img_post_6">
                  <img src="images/download (1).jpg" alt="img" />
                </a>
                <a href="#" className="footer_img_post_6">
                  <img src="images/science-578x362.jpg" alt="img" />
                </a>
                <a href="#" className="footer_img_post_6">
                  <img src="images/vil-son-35490.jpg" alt="img" />
                </a>
                <a href="#" className="footer_img_post_6">
                  <img src="images/zack-minor-15104.jpg" alt="img" />
                </a>
                <a href="#" className="footer_img_post_6">
                  <img src="images/download.jpg" alt="img" />
                </a>
                <a href="#" className="footer_img_post_6">
                  <img src="images/download (2).jpg" alt="img" />
                </a>
                <a href="#" className="footer_img_post_6">
                  <img src="images/ryan-moreno-98837.jpg" alt="img" />
                </a>
              </div>
            </div>
            <div className="row justify-content-center pt-2 pb-4">
              <div className="col-12 col-md-8 col-lg-7">
                <div className="input-group">
                  <span
                    className="input-group-addon fh5co_footer_text_box"
                    id="basic-addon1"
                  >
                    <i className="fa fa-envelope"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control fh5co_footer_text_box"
                    placeholder="Enter your email..."
                    aria-describedby="basic-addon1"
                  />
                  <a
                    href="#"
                    className="input-group-addon fh5co_footer_subcribe"
                    id="basic-addon12"
                  >
                    <i className="fa fa-paper-plane-o"></i>&nbsp;&nbsp;Subscribe
                  </a>
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
