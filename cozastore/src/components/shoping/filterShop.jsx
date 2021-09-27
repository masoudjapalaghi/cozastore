import React from "react";
import { Slide } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const FilterShop = () => {
  return (
    <Slide direction="left" className=" w-100">
      <div className="panel-filter w-full p-t-10">
        <div className="wrap-filter flex-w bg6 w-full p-lr-40 p-t-27 p-lr-15-sm">
          <div className="filter-col1 p-r-15 p-b-27">
            <div className="mtext-102 cl2 p-b-15">مرتب سازی براساس</div>

            <ul>
              <li className="p-b-6">
                <Link to="" className="filter-link stext-106 trans-04">
                  پیش فرض
                </Link>
              </li>

              <li className="p-b-6">
                <Link to="" className="filter-link stext-106 trans-04">
                  محبوبیت
                </Link>
              </li>

              <li className="p-b-6">
                <Link to="" className="filter-link stext-106 trans-04">
                  میانگین امتیاز
                </Link>
              </li>

              <li className="p-b-6">
                <Link to=""
                  className="filter-link stext-106 trans-04 filter-link-active"
                >
                  جدیدترین
                </Link>
              </li>

              <li className="p-b-6">
                <Link to="" className="filter-link stext-106 trans-04">
                  قیمت: کم تا زیاد
                </Link>
              </li>

              <li className="p-b-6">
                <Link to="" className="filter-link stext-106 trans-04">
                  قیمت: زیاد تا کم
                </Link>
              </li>
            </ul>
          </div>

          <div className="filter-col2 p-r-15 p-b-27">
            <div className="mtext-102 cl2 p-b-15">قیمت</div>

            <ul>
              <li className="p-b-6">
                <Link to=""
                  className="filter-link stext-106 trans-04 filter-link-active"
                >
                  همه
                </Link>
              </li>

              <li className="p-b-6">
                <Link to="" className="filter-link stext-106 trans-04">
                  0.00 - 50.00
                </Link>
              </li>

              <li className="p-b-6">
                <Link to="" className="filter-link stext-106 trans-04">
                  50.00 - 100.00
                </Link>
              </li>

              <li className="p-b-6">
                <Link to="" className="filter-link stext-106 trans-04">
                  100.00 - 150.00
                </Link>
              </li>

              <li className="p-b-6">
                <Link to="" className="filter-link stext-106 trans-04">
                  150.00 - 200.00
                </Link>
              </li>

              <li className="p-b-6">
                <Link to="" className="filter-link stext-106 trans-04">
                  200.00+
                </Link>
              </li>
            </ul>
          </div>

          <div className="filter-col3 p-r-15 p-b-27">
            <div className="mtext-102 cl2 p-b-15">رنگ</div>

            <ul>
              <li className="p-b-6">
                <span className="fs-15 lh-12 m-r-6" style={{ color: "#222" }}>
                  <i className="zmdi zmdi-circle"></i>
                </span>

                <Link to="" className="filter-link stext-106 trans-04">
                  مشکی
                </Link>
              </li>

              <li className="p-b-6">
                <span
                  className="fs-15 lh-12 m-r-6"
                  style={{ color: "#4272d7" }}
                >
                  <i className="zmdi zmdi-circle"></i>
                </span>

                <Link to=""
                  className="filter-link stext-106 trans-04 filter-link-active"
                >
                  آبی
                </Link>
              </li>

              <li className="p-b-6">
                <span
                  className="fs-15 lh-12 m-r-6"
                  style={{ color: "#b3b3b3" }}
                >
                  <i className="zmdi zmdi-circle"></i>
                </span>

                <Link to="" className="filter-link stext-106 trans-04">
                  خاکستری
                </Link>
              </li>

              <li className="p-b-6">
                <span
                  className="fs-15 lh-12 m-r-6"
                  style={{ color: "#00ad5f" }}
                >
                  <i className="zmdi zmdi-circle"></i>
                </span>

                <Link to="" className="filter-link stext-106 trans-04">
                  سبز
                </Link>
              </li>

              <li className="p-b-6">
                <span
                  className="fs-15 lh-12 m-r-6"
                  style={{ color: "#fa4251" }}
                >
                  <i className="zmdi zmdi-circle"></i>
                </span>

                <Link to="" className="filter-link stext-106 trans-04">
                  قرمز
                </Link>
              </li>

              <li className="p-b-6">
                <span className="fs-15 lh-12 m-r-6" style={{ color: "#aaa" }}>
                  <i className="zmdi zmdi-circle-o"></i>
                </span>

                <Link to="" className="filter-link stext-106 trans-04">
                  سفید
                </Link>
              </li>
            </ul>
          </div>

          <div className="filter-col4 p-b-27">
            <div className="mtext-102 cl2 p-b-15">لینک ها</div>

            <div className="flex-w p-t-4 m-r--5">
              <Link
                to=""
                className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
              >
                مد
              </Link>

              <Link
                to=""
                className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
              >
                سبک زندگی
              </Link>

              <Link
                to=""
                className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
              >
                جین
              </Link>

              <Link
                to=""
                className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
              >
                سبک خیابان
              </Link>

              <Link
                to=""
                className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
              >
                لباس محلی
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default FilterShop;
