import React, { useState, useRef, useEffect, useContext } from "react";
import "./Login.scss";
import { loginUser } from "../../services/userService";
import { UserContext } from "../../context/UserContext";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();

  const { user, loginContext } = useContext(UserContext);

  const [valueLogin, setValueLogin] = useState("");
  const [password, setPassword] = useState("");

  const RefEmail = useRef(null);
  const RefPwt = useRef(null);

  const defalutObjValid = {
    isValidValueLogin: true,
    isValidValuePwt: true,
  };
  const [objValidInput, setObjValidInput] = useState(defalutObjValid);

  const handleLogin = async () => {
    setObjValidInput(defalutObjValid);
    if (!valueLogin) {
      toast.error("Please enter your email address or username");
      RefEmail.current.focus();
      setObjValidInput({ ...defalutObjValid, isValidValueLogin: false });
      return;
    }
    if (!password) {
      toast.error("Please enter your password");
      RefPwt.current.focus();
      setObjValidInput({ ...defalutObjValid, isValidValuePwt: false });
      return;
    }
    let result = {
      email: valueLogin,
      password,
    };
    let response = await loginUser(result);
    if (response.success === true) {
      let token = response.token;
      let data = {
        isAuthenticated: true,
        token,
        account: {
          valueLogin,
        },
      };
      loginContext(data);
      localStorage.setItem("jwtNews24", result.token);
      navigate("/");
    }

    if (response.errors !== null) {
      toast.error(response.errors);
    }
  };

  const handlePress = (e) => {
    if (e.charCode === 13 && e.code === "Enter") {
      handleLogin();
    }
  };

  useEffect(() => {
    if (user && user.isAuthenticated) {
      navigate("/");
    }
  }, []);

  return (
    <div className="login-container">
      <div className="container">
        <div className="row px-3 px-sm-0">
          <div className="content-left col-12 d-none col-sm-7 d-sm-block">
            <div className="content-left-detail mt-3">
              Coffee is a way of stealing time which should by rights belong to
              your older self
            </div>
          </div>
          <div className="content-right col-sm-5 col-12 d-flex flex-column gap-3 py-3">
            <label htmlFor="email" className="form-label">
              Email:{" "}
            </label>
            <input
              onKeyPress={(e) => handlePress(e)}
              ref={RefEmail}
              value={valueLogin}
              onChange={(e) => setValueLogin(e.target.value)}
              className={
                objValidInput.isValidValueLogin
                  ? "form-control"
                  : "is-invalid form-control"
              }
              placeholder="Email Address"
              type="text"
            />
            <label htmlFor="email" className="form-label">
              Password:{" "}
            </label>
            <input
              onKeyPress={(e) => handlePress(e)}
              ref={RefEmail}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={
                objValidInput.isValidValuePwt
                  ? "form-control"
                  : "is-invalid form-control"
              }
              placeholder="Password"
              type="password"
            />
            <button className="btn btn-primary" onClick={() => handleLogin()}>
              Login
            </button>
            <hr />
            <div className="text-center">
              <Link to="/register" className="btn btn-success">
                Create New Account
              </Link>
              <div className="mt-3 return">
                <Link to="/">
                  <i className="fa fa-arrow-circle-left"></i>
                  <span tile="Return to Homepage">Return to Homepage</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
