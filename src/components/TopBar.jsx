import React from "react";

const TopBar = () => {
  return (
    <div className="container-fluid fh5co_header_bg">
      <div className="container">
        <div className="row">
          <div className="col-12 fh5co_mediya_center">
            <a href="#" className="color_fff fh5co_mediya_setting">
              <i className="fa fa-clock-o"></i>&nbsp;&nbsp;&nbsp;Friday, 5
              January 2018
            </a>
            <div className="d-inline-block fh5co_trading_posotion_relative">
              <a href="#" className="treding_btn">
                Trending
              </a>
              <div className="fh5co_treding_position_absolute"></div>
            </div>
            <a href="#" className="color_fff fh5co_mediya_setting">
              Instagram’s big redesign goes live with black-and-white app
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
