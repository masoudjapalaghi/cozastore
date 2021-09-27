import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { withRouter } from "react-router";
import LoadingBar from 'react-redux-loading-bar'
import Banner from "../banner/Banner";
import Footer from "../common/footer";
import Header from "../common/header";
import MainNav from "../navs/mainNav";
import MobileNav from "../navs/mobileNav";


const MainLayout = (props) => {
    const {pathname}=props.location;
  return (
    <Fragment>
      <Helmet>
        <title>فروشگاه کوزا</title>
      </Helmet>
      <LoadingBar  style={{ zIndex:1100, backgroundColor: "skyblue", height: "5px" }}/>
      <MainNav/>
      <MobileNav/>
      {pathname==="/"?<Header/>:null}
      {pathname==="/"?<Banner/>:null}
      {props.children}
      <Footer/>
    </Fragment>
  );
};

export default withRouter( MainLayout);
