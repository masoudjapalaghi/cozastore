import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
import { NavLink } from "react-router-dom";

const Mobilemenu = () => {
  return (
    <Fade>
      <div className="menu-mobile">
        <nav>
          <Slide direction="down">
            <ul className="main-menu-m">
              <li>
                <NavLink exact to="/">
                  صفحه اصلی
                </NavLink>
              </li>

              <li>
                <NavLink to="/mainshop">فروشگاه</NavLink>
              </li>
              <li>
                <NavLink to="/blog">وبلاگ</NavLink>
              </li>

              <li>
                <NavLink to="/about">درباره ما</NavLink>
              </li>

              <li>
                <NavLink to="/contact">ارتباط با ما</NavLink>
              </li>
            </ul>
          </Slide>
        </nav>
      </div>
    </Fade>
  );
};

export default Mobilemenu;
