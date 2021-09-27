import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg3 p-t-75 p-b-32 rtl">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-lg-3 p-b-50">
            <h4 className="stext-301 cl0 p-b-30">دسته بندی ها</h4>

            <ul>
              <li className="p-b-10">
                <Link to="" className="stext-107 cl7 hov-cl1 trans-04">
                  زنانه
                </Link>
              </li>

              <li className="p-b-10">
                <Link to="" className="stext-107 cl7 hov-cl1 trans-04">
                  مردانه
                </Link>
              </li>

              <li className="p-b-10">
                <Link to="" className="stext-107 cl7 hov-cl1 trans-04">
                  کفش
                </Link>
              </li>

              <li className="p-b-10">
                <Link to="" className="stext-107 cl7 hov-cl1 trans-04">
                  ساعت
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-sm-6 col-lg-3 p-b-50">
            <h4 className="stext-301 cl0 p-b-30">کمک</h4>

            <ul>
              <li className="p-b-10">
                <Link to="" className="stext-107 cl7 hov-cl1 trans-04">
                  پیگیری سفارش
                </Link>
              </li>

              <li className="p-b-10">
                <Link to="" className="stext-107 cl7 hov-cl1 trans-04">
                  مرجوعی
                </Link>
              </li>

              <li className="p-b-10">
                <Link to="" className="stext-107 cl7 hov-cl1 trans-04">
                  حمل دریایی
                </Link>
              </li>

              <li className="p-b-10">
                <Link to="" className="stext-107 cl7 hov-cl1 trans-04">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-sm-6 col-lg-3 p-b-50">
            <h4 className="stext-301 cl0 p-b-30">در تماس باشید</h4>

            <p className="stext-107 cl7 size-201">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.(+1)
              96 716 6879
            </p>

            <div className="p-t-27">
              <Link to="" className="fs-18 cl7 hov-cl1 trans-04 m-r-16">
                <i className="fa fa-facebook"></i>
              </Link>

              <Link to="" className="fs-18 cl7 hov-cl1 trans-04 m-r-16">
                <i className="fa fa-instagram"></i>
              </Link>

              <Link to="" className="fs-18 cl7 hov-cl1 trans-04 m-r-16">
                <i className="fa fa-pinterest-p"></i>
              </Link>
            </div>
          </div>

          <div className="col-sm-6 col-lg-3 p-b-50">
            <h4 className="stext-301 cl0 p-b-30">خبرنامه</h4>

            <form>
              <div className="wrap-input1 w-full p-b-4">
                <input
                  className="input1 bg-none plh1 stext-107 cl7"
                  type="text"
                  name="email"
                  placeholder="email@example.com"
                />
                <div className="focus-input1 trans-04"></div>
              </div>

              <div className="p-t-18">
                <button className="flex-c-m stext-101 cl0 size-103 bg1 bor1 hov-btn2 p-lr-15 trans-04">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="p-t-40">
          <p className="stext-107 cl6 txt-center">
            Copyright &copy;
            <script>document.write(new Date().getFullYear());</script> All
            rights reserved | Made with{" "}
            <i className="fa fa-heart-o" aria-hidden="true"></i> by{" "}
            <Link to="" target="_blank">
              masoud teymuri
            </Link>{" "}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
