import React, { useState, useRef, useContext, useEffect } from "react";
import "./Register.scss";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../services/userService";
import { toast } from "react-toastify";
import { UserContext } from "../../context/UserContext";

const Register = () => {
  const navigate = useNavigate();

  const handleToLogin = () => {
    navigate("/login");
  };

  const { user } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const defaultValidInput = {
    isValidEmail: true,
    isValidPhone: true,
    isValidUserName: true,
    isValidPassword: true,
    isValidConfirmPassword: true,
  };
  const [objCheckInput, setObjCheckInput] = useState(defaultValidInput);

  const RefEmail = useRef(null);
  const RefUserName = useRef(null);
  const RefPassword = useRef(null);

  const isValidInputs = () => {
    setObjCheckInput(defaultValidInput);
    if (!email) {
      RefEmail.current.focus();
      toast.error("Email is required");
      setObjCheckInput({ ...defaultValidInput, isValidEmail: false });
      return false;
    }

    var regx = /\S+@\S+\.\S+/;
    if (!regx.test(email)) {
      RefEmail.current.focus();
      setObjCheckInput({ ...defaultValidInput, isValidEmail: false });
      toast.error("Please enter a valid email address");
      return false;
    }

    if (!password) {
      RefPassword.current.focus();
      toast.error("Password is required");
      setObjCheckInput({ ...defaultValidInput, isValidPassword: false });
      return false;
    }

    return true;
  };

  const handleRegister = async () => {
    let check = isValidInputs();
    let data = {
      email,
      username,
      password,
    };
    if (check === true) {
      let result = await registerUser(data);
      if (result.success === true) {
        toast.success("Register Success");
        handleToLogin();
      }
    }
  };

  const handlePress = (e) => {
    if (e.charCode === 13 && e.code === "Enter") {
      handleRegister();
    }
  };

  useEffect(() => {
    if (user && user.isAuthenticated) {
      navigate("/");
    }
  }, []);

  return (
    <div className="register-container">
      <div className="container">
        <div className="row px-3 px-sm-0">
          <div className="content-left col-12 d-none col-sm-7 d-sm-block">
            <div className="content-left-detail mt-3">
              Coffee is a way of stealing time which should by rights belong to
              your older self
            </div>
          </div>
          <div className="content-right col-sm-5 col-12 d-flex flex-column gap-3 py-3">
            <div className="form-groups">
              <label htmlFor="email" className="form-label">
                Email:{" "}
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                ref={RefEmail}
                className="form-control"
                placeholder="Email Address"
                type="text"
              />
            </div>
            <div className="form-groups">
              <label htmlFor="username" className="form-label">
                UserName:{" "}
              </label>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                ref={RefUserName}
                className="form-control"
                placeholder="UserName"
                type="text"
              />
            </div>
            <div className="form-groups">
              <label htmlFor="password" className="form-label">
                Password:{" "}
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                ref={RefPassword}
                onKeyPress={(e) => handlePress(e)}
                className="form-control"
                placeholder="Password"
                type="password"
              />
            </div>
            <button
              className="btn btn-primary"
              onClick={() => handleRegister()}
            >
              Register
            </button>
            <hr />
            <div className="text-center" onClick={() => handleToLogin()}>
              <button className="btn btn-success">Already've an account</button>
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

export default Register;
