import { isEmpty } from "lodash";
import React, { Fragment, useContext, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import NavContext from "../../context/navContext";
import Mobilemenu from "./mobileMenu";

const MobileNav = () => {
  const [showMenu, setShowMenu] = useState(false);

  const mobileContext = useContext(NavContext);
  const { handleShowSearchMain, handleShowFavriteCart } = mobileContext;
  const user = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);
  const favorite = useSelector((state) => state.favorite);
  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  
  };
  return (
    <Fragment>
      <div className="wrap-header-mobile">
        <div className="logo-mobile">
          <NavLink to="/">
            <img src="images/icons/logo-01.png" alt="IMG-LOGO" />
          </NavLink>
        </div>

        <div className=" flex-w flex-r-m m-r-15">
          {isEmpty(user) ? (
            <div className="icon-header-item cl2 hov-cl1 trans-04  p-r-15">
              <NavLink
                to="/login"
                style={{ color: "black", height: "0px" }}
                activeStyle={{ color: "#6c7ae0" }}
              >
                <i className="fa fa-user-o fs-22 mb-1"></i>
              </NavLink>
            </div>
          ) : (
            <div className="dropdown icon-header-item cl2 hov-cl1 trans-04 p-r-20 p-l-22">
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
          )}
          <button
            className="icon-header-item cl2 hov-cl1 trans-04 pl- p-r-20"
            onClick={handleShowSearchMain}
          >
            <i className="zmdi zmdi-search"></i>
          </button>
          <button
            className="icon-header-item cl2 hov-cl1 trans-04 p-r-20 icon-header-noti js-show-cart"
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

          <NavLink
            to="#"
            onClick={handleShowFavriteCart}
            className="dis-block icon-header-item cl2 hov-cl1 trans-04 p-r-20 p-l-10 icon-header-noti"
            data-notify={favorite.length}
          >
            <i className="zmdi zmdi-favorite-outline"></i>
          </NavLink>
        </div>

        <div
          className={showMenu?"btn-show-menu-mobile hamburger hamburger--squeeze is-active":"btn-show-menu-mobile hamburger hamburger--squeeze "}
          onClick={handleShowMenu}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </div>
      </div>

      {showMenu ? (
        <Mobilemenu/>
      ) : null}
    </Fragment>
  );
};

export default MobileNav;
