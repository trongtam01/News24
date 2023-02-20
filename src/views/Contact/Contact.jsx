import React, { useRef, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { sendContact } from "../../services/contactService";

const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const defaultValidInput = {
    isValidFullName: true,
    isValidEmail: true,
    isValidSubject: true,
    isValidMessage: true,
  };

  const [objCheckInput, setObjCheckInput] = useState(defaultValidInput);

  const RefFullName = useRef(null);
  const RefEmail = useRef(null);
  const RefSubject = useRef(null);
  const RefMessage = useRef(null);

  const isValidInputs = () => {
    setObjCheckInput(defaultValidInput);
    if (!fullName) {
      RefFullName.current.focus();
      toast.error("Fullname is required");
      setObjCheckInput({ ...defaultValidInput, isValidPhone: false });
      return false;
    }

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

    if (!subject) {
      RefSubject.current.focus();
      toast.error("Subject is required");
      setObjCheckInput({ ...defaultValidInput, isValidSubject: false });
      return false;
    }

    if (!message) {
      RefMessage.current.focus();
      toast.error("Message is required");
      setObjCheckInput({ ...defaultValidInput, isValidMessage: false });
      return false;
    }

    return true;
  };

  const handleSubmit = async () => {
    let check = isValidInputs();

    if (check === true) {
      await sendContact({
        email,
        fullName,
        subject,
        message,
      });
      toast.success("Send Success");
      setFullName("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
  };

  const handlePress = (e) => {
    if (e.charCode === 13 && e.code === "Enter") {
      handleSubmit();
    }
  };

  return (
    <>
      <div className="container-fluid contact_us_bg_img">
        <div className="container">
          <div className="row">
            <a href="#" className="fh5co_con_123">
              <i className="fa fa-home"></i>
            </a>
            <a href="#" className="fh5co_con pt-2">
              {" "}
              Contact Us{" "}
            </a>
          </div>
        </div>
      </div>
      <div className="container-fluid  fh5co_fh5co_bg_contcat">
        <div className="container">
          <div className="row py-4">
            <div className="col-md-4 py-3">
              <div className="row fh5co_contact_us_no_icon_difh5co_hover">
                <div className="col-3 fh5co_contact_us_no_icon_difh5co_hover_1">
                  <div className="fh5co_contact_us_no_icon_div">
                    {" "}
                    <span>
                      <i className="fa fa-phone"></i>
                    </span>{" "}
                  </div>
                </div>
                <div className="col-9 align-self-center fh5co_contact_us_no_icon_difh5co_hover_2">
                  <span className="c_g d-block">Call Us</span>
                  <span className="d-block c_g fh5co_contact_us_no_text">
                    +1 800 559 658
                  </span>
                </div>
                <div className="clearfix"></div>
              </div>
            </div>
            <div className="col-md-4 py-3">
              <div className="row fh5co_contact_us_no_icon_difh5co_hover">
                <div className="col-3 fh5co_contact_us_no_icon_difh5co_hover_1">
                  <div className="fh5co_contact_us_no_icon_div">
                    {" "}
                    <span>
                      <i className="fa fa-envelope"></i>
                    </span>{" "}
                  </div>
                </div>
                <div className="col-9 align-self-center fh5co_contact_us_no_icon_difh5co_hover_2">
                  <span className="c_g d-block">Have any questions?</span>
                  <span className="d-block c_g fh5co_contact_us_no_text">
                    News@example.com
                  </span>
                </div>
                <div className="clearfix"></div>
              </div>
            </div>
            <div className="col-md-4 py-3">
              <div className="row fh5co_contact_us_no_icon_difh5co_hover">
                <div className="col-3 fh5co_contact_us_no_icon_difh5co_hover_1">
                  <div className="fh5co_contact_us_no_icon_div">
                    {" "}
                    <span>
                      <i className="fa fa-map-marker"></i>
                    </span>{" "}
                  </div>
                </div>
                <div className="col-9 align-self-center fh5co_contact_us_no_icon_difh5co_hover_2">
                  <span className="c_g d-block">Address</span>
                  <span className="d-block c_g fh5co_contact_us_no_text">
                    {" "}
                    123 Some Street USA
                  </span>
                </div>
                <div className="clearfix"></div>
              </div>
            </div>
            <div className="clearfix"></div>
          </div>
        </div>
      </div>
      <div className="container-fluid mb-4">
        <div className="container">
          <div className="col-12 text-center contact_margin_svnit ">
            <div className="text-center fh5co_heading py-2">Contact Us</div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6">
              <form className="row" id="fh5co_contact_form">
                <div className="col-12 py-3">
                  <input
                    type="text"
                    className="form-control fh5co_contact_text_box"
                    placeholder="Enter Your Name"
                    onKeyPress={(e) => handlePress(e)}
                    ref={RefFullName}
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    name="fullName"
                  />
                </div>
                <div className="col-6 py-3">
                  <input
                    type="text"
                    className="form-control fh5co_contact_text_box"
                    placeholder="E-mail"
                    onKeyPress={(e) => handlePress(e)}
                    ref={RefEmail}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    name="email"
                  />
                </div>
                <div className="col-6 py-3">
                  <input
                    type="text"
                    className="form-control fh5co_contact_text_box"
                    placeholder="Subject"
                    onKeyPress={(e) => handlePress(e)}
                    ref={RefSubject}
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    name="subject"
                  />
                </div>
                <div className="col-12 py-3">
                  <textarea
                    className="form-control fh5co_contacts_message"
                    placeholder="Message"
                    onKeyPress={(e) => handlePress(e)}
                    ref={RefMessage}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    name="message"
                  ></textarea>
                </div>
                <div className="col-12 py-3 text-center">
                  {" "}
                  <a className="btn contact_btn" onClick={() => handleSubmit()}>
                    Send Message
                  </a>{" "}
                </div>
              </form>
            </div>
            <div className="col-12 col-md-6 align-self-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3168.639290621062!2d-122.08624618469247!3d37.421999879825215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sbe!4v1514861541665"
                className="map_sss"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
