import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router";
import About from "../components/about/about";
import Blog from "../components/blogs/blog";
import SingleBlog from "../components/blogs/singleBlog";
import Modal from "../components/shoping/modalShop";
import Contact from "../components/contact/contact";
import Features from "../components/features/features";
import MainLayout from "../components/layouts/MainLayout";
import Login from "../components/login/login";
import Register from "../components/register/register";
import MainShop from "../components/shoping/mainShop";
import Shop from "../components/shoping/shop";
import { paginate } from "../utils/paginate";
import NavGlobalState from "./../context/navGlobalState";
import { decodeToken } from "./../utils/decodeToken";
import LogOut from "../components/login/logout";
import NotFound from "../components/common/404";
import { isEmpty } from "lodash";
import UserGlobalestate from "../context/userGlobalestate";
import { addUser, clearUser } from "../actions/user";
import InformationUser from "../components/cart/cartInfoUser";
import { useCookies } from "react-cookie";
import ModalShop from "../components/shoping/modalShop";

const CozaStore = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const products = useSelector((state) => state.products);
  const indexProducts = paginate(products, 1, 8);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (cookies.token) {
      const decodetoken = decodeToken(cookies.token);
      const dateNow = Date.now() / 1000;
      if (decodetoken.payload.exp < dateNow) {
        removeCookie("token", { path: "/" });
        localStorage.removeItem("persist:root");
        dispatch(clearUser());
      } else {
        dispatch(addUser(cookies.user));
      }
    }
  }, []);
  return (
    <NavGlobalState>
      <MainLayout>
        <Switch>
          <Route
            path="/register"
            render={() =>
              isEmpty(user) ? (
                <UserGlobalestate>
                  <Register />
                </UserGlobalestate>
              ) : (
                <Redirect to="/" />
              )
            }
          />
          <Route
            path="/login"
            render={() =>
              isEmpty(user) ? (
                <UserGlobalestate>
                  <Login />
                </UserGlobalestate>
              ) : (
                <Redirect to="/" />
              )
            }
          />
          <Route
            path="/user"
            render={() =>
              !isEmpty(user) ? (
                <InformationUser user={user} />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          <Route path="/logout" component={LogOut} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Route
            path="/singleblog/:slug"
            render={(props) => <SingleBlog {...props} />}
          />
          <Route path="/blog" component={Blog} />
          <Route
            path="/singleshop/:id"
            render={(props) => <ModalShop {...props} />}
          />
          <Route
            path="/features"
            render={() =>
              !isEmpty(user) ? <Features /> : <Redirect to="/login" />
            }
          />
          <Route path="/mainshop" component={MainShop} />
          <Route
            path="/"
            exact
            render={() => <Shop products={indexProducts} />}
          />
          <Route path="*" exact component={NotFound} />
        </Switch>
      </MainLayout>
    </NavGlobalState>
  );
};

export default CozaStore;
