import React, { Fragment, useContext } from "react";
import { Helmet } from "react-helmet";
import { Link, withRouter } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import { userContext } from "../../context/userContext";

const Register = () => {
  const regisrterContext = useContext(userContext);
  const {
    handleRegister,
    username,
    setUsername,
    email,
    setEmail,
    password,
    setPassword,
    phone,
    setPhone,
    policy,
    setPolicy,
    gender,
    setGender,
    validator,
  } = regisrterContext;
  return (
    <Fragment>
      <Helmet>
        <title>عضویت</title>
      </Helmet>
      <div className="limiter">
        <div className="container-login100 rtl">
          <div className="wrap-login100">
            <form
              onSubmit={handleRegister}
              className="login100-form validate-form"
            >
              <span className="login100-form-title p-b-26 p-t-0">Welcome</span>
              <span className="login100-form-title p-b-10">
                <img src="images/icons/pin.png" alt="IMG-BLOG" />
              </span>
              <div className="wrap-input100 ">
                <input
                  name="username"
                  className="input100"
                  type="text"
                  placeholder="USERNAME"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                    validator.current.showMessageFor("username");
                  }}
                />
              </div>
              <small className="text-danger text-capitalize font-weight-bold">
                {validator.current.message(
                  "username",
                  username,
                  "required|min:5"
                )}
              </small>
              <div className="wrap-input100 ">
                <input
                  className="input100"
                  name="email"
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    validator.current.showMessageFor("email");
                  }}
                />
              </div>
              <small className="text-danger text-capitalize font-weight-bold">
                {validator.current.message("email", email, "required|email")}
              </small>
              <div className="wrap-input100 ">
                <span className="btn-show-pass">
                  <i className="zmdi zmdi-eye"></i>
                </span>
                <input
                  name="password"
                  className="input100"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    validator.current.showMessageFor("password");
                  }}
                />
              </div>
              <small className="text-danger text-capitalize font-weight-bold d-block mb-3">
                {validator.current.message(
                  "password",
                  password,
                  "required|alpha_num|min:8"
                )}
              </small>
              <PhoneInput
              name="phone"
              type="phone"
                country={"ir"}
                value={phone}
                onChange={phone => {
                  setPhone(phone);
                }}
              />
              <small className="text-danger text-capitalize font-weight-bold d-block mt-3 mb-3">
                {validator.current.message(
                  "phone",
                  phone,
                  "required|min:12"
                )}
              </small>
              <div className="accept-rules">
                <label>
                  <input
                    className="dis-inline"
                    name="policy"
                    value={policy}
                    onChange={(e) => {
                      setPolicy(e.currentTarget.checked);
                      validator.current.showMessageFor("policy");
                    }}
                    type="checkbox"
                  />
                  قوانین و مقررات سایت را میپذیرم
                </label>
              </div>
              <small className="text-danger text-capitalize font-weight-bold d-block mb-3">
                {validator.current.message("policy", policy, "required")}
              </small>

              <div
                className="d-flex  p-tb-10"
                onChange={(e) => {
                  setGender(e.target.value);
                }}
                name="gender"
                value={gender}
              >
                <i className="fa fa-male text-info"></i>{" "}
                <input type="radio" name="gender" value="male" />
                <i className="fa fa-female pl-5 text-danger"></i>
                <input type="radio" name="gender" value="female" />
              </div>
              <small className="text-danger text-capitalize font-weight-bold d-block mt-3 mb-3">
                {validator.current.message(
                  "phone",
                  gender,
                  "required"
                )}
              </small>
              <div className="link d-flex">
                <Link to="">
                  <i className="zmdi zmdi-assignment"></i> قوانین و مقررات سایت
                  !
                </Link>
                <Link to="/login">
                  <i className="zmdi zmdi-account"></i> ورود به سایت
                </Link>
              </div>
              <div className="container-login100-form-btn p-b-20">
                <div className="wrap-login100-form-btn">
                  <div className="login100-form-bgbtn"></div>
                  <button className="login100-form-btn">Register</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default withRouter(Register);
