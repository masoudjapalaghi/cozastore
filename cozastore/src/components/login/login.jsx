import React, { Fragment, useContext } from "react";
import { Helmet } from "react-helmet";
import { Link} from "react-router-dom";
import { userContext } from "../../context/userContext";

const Login = () => {
  const loginContext = useContext(userContext);
  const {
    handleLogin,
    email,
    setEmail,
    validator,
    password,
    setPassword,
  } = loginContext;
  return (
    <Fragment>
      <Helmet>
        <title>ورود</title>
      </Helmet>

      <div className="limiter rtl">
        <div className="container-login100">
          <div className="wrap-login100">
            <form
              onSubmit={handleLogin}
              className="login100-form validate-form"
            >
              <span className="login100-form-title p-b-26 p-t-0">Welcome</span>
              <span className="login100-form-title p-b-10">
                <img src="/images/icons/pin.png" alt="IMG-BLOG" />
              </span>

              <div className="wrap-input100 ">
                <input
                  className="input100"
                  type="text"
                  name="email"
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
                  className="input100"
                  type="password"
                  name="password"
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
              <div className="container-login100-form-btn">
                <div className="wrap-login100-form-btn">
                  <div className="login100-form-bgbtn"></div>
                  <button className="login100-form-btn">Login</button>
                </div>
              </div>

              <div className="text-center p-t-35">
                <span className="txt1">اگر اکانتی ندارید!?</span>

                <Link className="txt2 text-info" to="/register">
                  اکانت خودت رو بساز
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
