import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import {  withRouter } from "react-router";
import { LazyLoadImage } from "react-lazy-load-image-component";
import AsideBlog from "../common/asideBlog";
import { getSingleArticle } from "./../../actions/article";
import { Link } from "react-router-dom";
const SingleBlog = (props) => {
  const [imageUrl, setImageurl] = useState("");
  const article = useSelector((state) => state.article);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSingleArticle(props.match.params.slug));
  }, []);
  useEffect(() => {
    setImageurl(article.imageUrl);
  });
  if (!imageUrl) {
    return <span>Loading...</span>;
  }
  return (
    <section className="bg0 p-t-52 p-b-20 p-t-150 ">
      <Helmet>
        <title>وبلاگ</title>
      </Helmet>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-lg-9 p-b-80">
            <div className="p-r-45 p-r-0-lg">
              <div className="wrap-pic-w how-pos5-parent">
                <LazyLoadImage
                  src={`${imageUrl.url}`}
                  alt="IMG-BLOG"
                  effect="black-and-white"
                  placeholderSrc={
                    process.env.PUBLIC_URL + "/images/icons/logo-01.png"
                  }
                />
                <div className="flex-col-c-m size-123 bg9 how-pos5">
                  <span className="ltext-107 cl2 txt-center">22</span>

                  <span className="stext-109 cl3 txt-center">Jan 2021</span>
                </div>
              </div>

              <div className="p-t-32 rtl">
                <span className="flex-w flex-m stext-111 cl2 p-b-19">
                  <span>
                    <span className="cl4">By</span> Admin
                    <span className="cl12 m-l-4 m-r-6">|</span>
                  </span>

                  <span>
                    22 Jan, 2018
                    <span className="cl12 m-l-4 m-r-6">|</span>
                  </span>

                  <span>
                    StreetStyle, Fashion, Couple
                    <span className="cl12 m-l-4 m-r-6">|</span>
                  </span>

                  <span>8 کامنت</span>
                </span>

                <h4 className="ltext-109 cl2 p-b-28">{article.title}</h4>

                <p className="stext-117 cl6 p-b-26">{article.body}</p>
              </div>

              <div className="flex-w flex-t p-t-16 rtl">
                <span className="size-216 stext-116 cl8 p-t-4">Tags</span>

                <div className="flex-w size-217">
                  <Link
                    to=""
                    className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
                  >
                    Streetstyle
                  </Link>

                  <Link
                    to=""
                    className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
                  >
                    Crafts
                  </Link>
                </div>
              </div>

              <div className="p-t-40 rtl">
                <h5 className="mtext-113 cl2 p-b-12">پیام بگذارید</h5>

                <p className="stext-107 cl6 p-b-40">
                  آدرس ایمیل شما منتشر نخواهد شد.
                </p>

                <form>
                  <div className="bor19 m-b-20">
                    <textarea
                      className="stext-111 cl2 plh3 size-124 p-lr-18 p-tb-15"
                      name="cmt"
                      placeholder="متن پیام....."
                    ></textarea>
                  </div>

                  <div className="bor19 size-218 m-b-20">
                    <input
                      className="stext-111 cl2 plh3 size-116 p-lr-18"
                      type="text"
                      name="name"
                      placeholder="نام"
                    />
                  </div>

                  <div className="bor19 size-218 m-b-20">
                    <input
                      className="stext-111 cl2 plh3 size-116 p-lr-18"
                      type="text"
                      name="email"
                      placeholder="ایمیل"
                    />
                  </div>

                  <div className="bor19 size-218 m-b-30">
                    <input
                      className="stext-111 cl2 plh3 size-116 p-lr-18"
                      type="text"
                      name="web"
                      placeholder="وبسایت"
                    />
                  </div>

                  <button className="flex-c-m stext-101 cl0 size-125 bg3 bor2 hov-btn3 p-lr-15 trans-04">
                    ارسال پیام
                  </button>
                </form>
              </div>
            </div>
          </div>
          <AsideBlog />
        </div>
      </div>
    </section>
  );
};

export default withRouter(SingleBlog);
