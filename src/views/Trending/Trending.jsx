import React from "react";

const Trending = (props) => {
  const { dataPost } = props;
  return (
    <div className="container-fluid pt-3">
      <div className="container animate-box" data-animate-effect="fadeIn">
        <div>
          <div className="fh5co_heading fh5co_heading_border_bottom py-2 mb-4">
            Trending
          </div>
        </div>
        <div className="owl-carousel owl-theme js" id="slider1">
          <div className="item px-2">
            <div className="fh5co_latest_trading_img_position_relative">
              <div className="fh5co_latest_trading_img">
                <img
                  src="images/allef-vinicius-108153.jpg"
                  alt=""
                  className="fh5co_img_special_relative"
                />
              </div>
              <div className="fh5co_latest_trading_img_position_absolute"></div>
              <div className="fh5co_latest_trading_img_position_absolute_1">
                <a href="single.html" className="text-white">
                  Here's a new way to take better photos for instagram
                </a>
                <div className="fh5co_latest_trading_date_and_name_color">
                  Walter Johson - March 7,2017
                </div>
              </div>
            </div>
          </div>
          <div className="item px-2">
            <div className="fh5co_latest_trading_img_position_relative">
              <div className="fh5co_latest_trading_img">
                <img
                  src="images/abigail-keenan-65477.jpg"
                  alt=""
                  className="fh5co_img_special_relative"
                />
              </div>
              <div className="fh5co_latest_trading_img_position_absolute"></div>
              <div className="fh5co_latest_trading_img_position_absolute_1">
                <a href="single.html" className="text-white">
                  Here's a new way to take better photos for instagram
                </a>
                <div className="fh5co_latest_trading_date_and_name_color">
                  Walter Johson - March 7,2017
                </div>
              </div>
            </div>
          </div>
          <div className="item px-2">
            <div className="fh5co_latest_trading_img_position_relative">
              <div className="fh5co_latest_trading_img">
                <img
                  src="images/ryan-moreno-98837.jpg"
                  alt=""
                  className="fh5co_img_special_relative"
                />
              </div>
              <div className="fh5co_latest_trading_img_position_absolute"></div>
              <div className="fh5co_latest_trading_img_position_absolute_1">
                <a href="single.html" className="text-white">
                  Here's a new way to take better photos for instagram
                </a>
                <div className="fh5co_latest_trading_date_and_name_color">
                  Walter Johson - March 7,2017
                </div>
              </div>
            </div>
          </div>
          <div className="item px-2">
            <div className="fh5co_latest_trading_img_position_relative">
              <div className="fh5co_latest_trading_img">
                <img
                  src="images/science-578x362.jpg"
                  alt=""
                  className="fh5co_img_special_relative"
                />
              </div>
              <div className="fh5co_latest_trading_img_position_absolute"></div>
              <div className="fh5co_latest_trading_img_position_absolute_1">
                <a href="single.html" className="text-white">
                  Here's a new way to take better photos for instagram
                </a>
                <div className="fh5co_latest_trading_date_and_name_color">
                  Walter Johson - March 7,2017
                </div>
              </div>
            </div>
          </div>
          <div className="item px-2">
            <div className="fh5co_latest_trading_img_position_relative">
              <div className="fh5co_latest_trading_img">
                <img
                  src="images/nick-karvounis-78711.jpg"
                  alt=""
                  className="fh5co_img_special_relative"
                />
              </div>
              <div className="fh5co_latest_trading_img_position_absolute"></div>
              <div className="fh5co_latest_trading_img_position_absolute_1">
                <a href="single.html" className="text-white">
                  Here's a new way to take better photos for instagram
                </a>
                <div className="fh5co_latest_trading_date_and_name_color">
                  Walter Johson - March 7,2017
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
