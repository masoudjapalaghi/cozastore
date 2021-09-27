import React from "react";
import { Link } from "react-router-dom";

const AsideBlog = () => {
  return (
    <div className="col-md-4 col-lg-3 p-b-80 rtl">
      <div className="side-menu">
        <div className="bor17 of-hidden pos-relative">
          <input
            className="stext-103 cl2 plh4 size-116 p-l-28 p-r-55"
            type="text"
            name="search"
            placeholder="Search"
          />

          <button className="flex-c-m size-122 ab-t-r fs-18 cl4 hov-cl1 trans-04">
            <i className="zmdi zmdi-search"></i>
          </button>
        </div>

        <div className="p-t-55">
          <h4 className="mtext-112 cl2 p-b-33">دسته بندی</h4>

          <ul>
            <li className="bor18">
              <Link
                to="#"
                className="dis-block stext-115 cl6 hov-cl1 trans-04 p-tb-8 p-lr-4"
              >
                مد
              </Link>
            </li>

            <li className="bor18">
              <Link
                to="#"
                className="dis-block stext-115 cl6 hov-cl1 trans-04 p-tb-8 p-lr-4"
              >
                زیبایی
              </Link>
            </li>

            <li className="bor18">
              <Link
                to="#"
                className="dis-block stext-115 cl6 hov-cl1 trans-04 p-tb-8 p-lr-4"
              >
                استایل خیابانی
              </Link>
            </li>

            <li className="bor18">
              <Link
                to="#"
                className="dis-block stext-115 cl6 hov-cl1 trans-04 p-tb-8 p-lr-4"
              >
                سبک زندگی
              </Link>
            </li>

            <li className="bor18">
              <Link
                to="#"
                className="dis-block stext-115 cl6 hov-cl1 trans-04 p-tb-8 p-lr-4"
              >
                سنتی
              </Link>
            </li>
          </ul>
        </div>

        <div className="p-t-65">
          <h4 className="mtext-112 cl2 p-b-33">محصولات ویژه</h4>

          <ul>
          <li className="flex-w flex-t p-b-30">
                <Link to="#" className="wrao-pic-w size-214 hov-ovelay1 m-l-20">
                  <img
                    src="/images/product-min-01.jpg"
                    alt="PRODUCT"
                  />
                </Link>

                <div className="size-215 flex-col-t p-t-8">
                  <Link to="#" className="stext-116 cl8 hov-cl1 trans-04">
                    ست کت و کلاه
                  </Link>

                  <span className="stext-116 cl6 p-t-20">85500000تومان</span>
                </div>
              </li>
              <li className="flex-w flex-t p-b-30">
                <Link to="#" className="wrao-pic-w size-214 hov-ovelay1 m-l-20">
                  <img
                    src="/images/product-min-02.jpg"
                    alt="PRODUCT"
                  />
                </Link>

                <div className="size-215 flex-col-t p-t-8">
                  <Link to="#" className="stext-116 cl8 hov-cl1 trans-04">
                    ست گرمکن ورزشی
                  </Link>

                  <span className="stext-116 cl6 p-t-20">15000000تومان</span>
                </div>
              </li>
              <li className="flex-w flex-t p-b-30">
                <Link to="#" className="wrao-pic-w size-214 hov-ovelay1 m-l-20">
                  <img
                    src="/images/product-min-03.jpg"
                    alt="PRODUCT"
                  />
                </Link>

                <div className="size-215 flex-col-t p-t-8">
                  <Link to="#" className="stext-116 cl8 hov-cl1 trans-04">
                   اورکت ورساچه
                  </Link>

                  <span className="stext-116 cl6 p-t-20">95500000تومان</span>
                </div>
              </li>
          </ul>
        </div>

        <div className="p-t-55">
          <h4 className="mtext-112 cl2 p-b-20">آرشیو</h4>

          <ul>
            <li className="p-b-7">
              <Link
                to="#"
                className="flex-w flex-sb-m stext-115 cl6 hov-cl1 trans-04 p-tb-2"
              >
                <span>July 2021</span>

                <span>(9)</span>
              </Link>
            </li>

            <li className="p-b-7">
              <Link
                to="#"
                className="flex-w flex-sb-m stext-115 cl6 hov-cl1 trans-04 p-tb-2"
              >
                <span>June 2021</span>

                <span>(39)</span>
              </Link>
            </li>

            <li className="p-b-7">
              <Link
                to="#"
                className="flex-w flex-sb-m stext-115 cl6 hov-cl1 trans-04 p-tb-2"
              >
                <span>May 2020</span>

                <span>(29)</span>
              </Link>
            </li>

            <li className="p-b-7">
              <Link
                to="#"
                className="flex-w flex-sb-m stext-115 cl6 hov-cl1 trans-04 p-tb-2"
              >
                <span>April 2020</span>

                <span>(35)</span>
              </Link>
            </li>

            <li className="p-b-7">
              <Link
                to="#"
                className="flex-w flex-sb-m stext-115 cl6 hov-cl1 trans-04 p-tb-2"
              >
                <span>March 2019</span>

                <span>(22)</span>
              </Link>
            </li>

            <li className="p-b-7">
              <Link
                to="#"
                className="flex-w flex-sb-m stext-115 cl6 hov-cl1 trans-04 p-tb-2"
              >
                <span>February 2019</span>

                <span>(32)</span>
              </Link>
            </li>

            <li className="p-b-7">
              <Link
                to="#"
                className="flex-w flex-sb-m stext-115 cl6 hov-cl1 trans-04 p-tb-2"
              >
                <span>January 2018</span>

                <span>(21)</span>
              </Link>
            </li>

            <li className="p-b-7">
              <Link
                to="#"
                className="flex-w flex-sb-m stext-115 cl6 hov-cl1 trans-04 p-tb-2"
              >
                <span>December 2017</span>

                <span>(26)</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="p-t-50">
          <h4 className="mtext-112 cl2 p-b-27">Tags</h4>

          <div className="flex-w m-r--5">
            <Link
              to="#"
              className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
            >
              Fashion
            </Link>

            <Link
              to="#"
              className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
            >
              Lifestyle
            </Link>

            <Link
              to="#"
              className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
            >
              Denim
            </Link>

            <Link
              to="#"
              className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
            >
              Streetstyle
            </Link>

            <Link
              to="#"
              className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
            >
              Crafts
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AsideBlog;
