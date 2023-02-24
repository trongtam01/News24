import React, { useContext } from "react";
import logo from "../assets/images/logo.png";
import { useNavigate, Link } from "react-router-dom";
import { UserContext, logoutContext } from "../context/UserContext";
import { toast } from "react-toastify";
import { logoutUser } from "../services/userService";

const TopBarIcon = () => {
  const navigate = useNavigate();

  const { user, logoutContext } = useContext(UserContext);

  const handleLogOut = async () => {
    await logoutUser(); //clear cookie
    localStorage.removeItem("jwtNews24"); // clear localstorge
    logoutContext(); //clear user contact
    navigate("/login");
  };

  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-3 fh5co_padding_menu">
            <img src={logo} alt="img" className="fh5co_logo_width" />
          </div>
          <div className="col-12 col-md-9 align-self-center fh5co_mediya_right">
            {user && user.isAuthenticated === true ? (
              <>
                <div className="text-center d-inline-block">
                  <a
                    onClick={() => handleLogOut()}
                    className="fh5co_display_table"
                  >
                    <div className="fh5co_verticle_middle">
                      <i className="fa fa-sign-out" aria-hidden="true"></i>
                    </div>
                  </a>
                </div>
              </>
            ) : (
              <>
                <div className="text-center d-inline-block">
                  <Link to="/login" className="fh5co_display_table">
                    <div className="fh5co_verticle_middle">
                      <i className="fa fa-sign-in"></i>
                    </div>
                  </Link>
                </div>
                <div className="text-center d-inline-block">
                  <Link to="/register" className="fh5co_display_table">
                    <div className="fh5co_verticle_middle">
                      <i className="fa fa-user-plus" aria-hidden="true"></i>
                    </div>
                  </Link>
                </div>
              </>
            )}
            {/* <div className="d-inline-block text-center dd_position_relative">
              <select className="form-control fh5co_text_select_option">
                <option>English</option>
                <option>French</option>
                <option>German</option>
                <option>Spanish</option>
              </select>
            </div> */}
            <div className="clearfix"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBarIcon;
