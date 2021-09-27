import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";
import NavContext from "../../context/navContext";
import { isEmpty } from "lodash";
import { useSelector } from "react-redux";

const MainNav = (props) => {
  const { pathname } = props.location;
  const mainNavContext = useContext(NavContext);
  const { handleShowFavriteCart, handleShowSearchMain } = mainNavContext;
  const user = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);
  const favorite = useSelector((state) => state.favorite);

  useEffect(() => {
    // require("../../utils/navs/menuMobile");
    require("../../utils/navs/fixedNavs");
  }, []);
  return (
    <div
      className={
        pathname === "/"
          ? "container-menu-desktop "
          : "container-menu-desktop fix-menu-desktop "
      }
    >
      <div
        style={pathname === "/" ? null : { backgroundColor: "white" }}
        className="wrap-menu-desktop "
      >
        <nav className="limiter-menu-desktop container rtl">
          <NavLink to="/" className="logo">
            <img src="/images/icons/logo-01.png" alt="IMG-LOGO" />
          </NavLink>

          <div className="menu-desktop">
            <ul className="main-menu">
              <li>
                <NavLink to="/" exact activeStyle={{ color: "#6c7ae0" }}>
                  صفحه اصلی
                </NavLink>
              </li>
              <li className="label1" data-label1="new">
                <NavLink to="/mainshop" activeStyle={{ color: "#6c7ae0" }}>
                  فروشگاه
                </NavLink>
              </li>
              <li>
                <NavLink to="/blog" activeStyle={{ color: "#6c7ae0" }}>
                  وب سایت
                </NavLink>
              </li>

              <li>
                <NavLink to="/about" activeStyle={{ color: "#6c7ae0" }}>
                  درباره ما
                </NavLink>
              </li>

              <li>
                <NavLink to="/contact" activeStyle={{ color: "#6c7ae0" }}>
                  ارتباط با ما
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="wrap-icon-header flex-w flex-r-m">
            {!isEmpty(user) ? (
              <div className="dropdown icon-header-item cl2 hov-cl1 trans-04 p-l-22">
                <img
                  src={
                    user.gender === "male"
                      ? "/images/icons/img_avatar.png"
                      : "/images/icons/avatar6.png"
                  }
                  alt="Avatar"
                  className="avatar"
                />
                <div className="dropdown-content ">
                  <NavLink to="/user" className="text-info">
                    {user.username}
                  </NavLink>
                  <NavLink to="/logout" className="text-danger">
                    LogOut
                  </NavLink>
                </div>
              </div>
            ) : (
              <div className="icon-header-item cl2 hov-cl1 trans-04 p-l-22">
                <NavLink
                  to="/login"
                  style={{ color: "black" }}
                  activeStyle={{ color: "#6c7ae0" }}
                >
                  <i className="fa fa-user-o fs-22"></i>
                </NavLink>
              </div>
            )}
            <button
              className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 "
              onClick={handleShowSearchMain}
            >
              <i className="zmdi zmdi-search"></i>
            </button>

            <button
              className={`icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11  ${
                cart.length > 0 ? "icon-header-noti" : null
              }`}
              data-notify={cart.length}
            >
              <NavLink
                to="/features"
                style={{ color: "black" }}
                activeStyle={{ color: "#6c7ae0" }}
              >
                <i className="zmdi zmdi-shopping-cart-plus"></i>
              </NavLink>
            </button>

            <button
              onClick={handleShowFavriteCart}
              className={`dis-block icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 ${
                favorite.length > 0 ? "icon-header-noti" : null
              }`}
              data-notify={favorite.length}
            >
              <i className="zmdi zmdi-favorite-outline"></i>
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default withRouter(MainNav);
