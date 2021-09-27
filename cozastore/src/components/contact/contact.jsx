import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
const Contact = () => {
  return (
    <Fragment>
    <Helmet>
      <title>
        ارتباط با ما
      </title>
    </Helmet>
      <section className="bg-img1 bg-img1-about txt-center p-lr-15 p-tb-92 ">
        <h2 className="ltext-105 cl0 txt-center">Contact</h2>
      </section>

      <section className="bg0 p-t-104 p-b-116 rtl">
        <div className="container">
          <div className="flex-w flex-tr">
            <div className="size-210 bor10 p-lr-70 p-t-55 p-b-70 p-lr-15-lg w-full-md">
              <form>
                <h4 className="mtext-105 cl2 txt-center p-b-30">
                برای ما پیامی ارسال کنید
                </h4>

                <div className="bor8 m-b-20 how-pos4-parent">
                  <input
                    className="stext-111 cl2 plh3 size-116 p-l-62 p-r-30"
                    type="text"
                    name="email"
                    placeholder="آدرس ایمیلتون را وارد کنید!؟"
                  />
                  <img
                    className="how-pos4 pointer-none"
                    src="images/icons/icon-email.png"
                    alt="ICON"
                  />
                </div>

                <div className="bor8 m-b-30">
                  <textarea
                    className="stext-111 cl2 plh3 size-120 p-lr-28 p-tb-25"
                    name="msg"
                    placeholder="چطور میتونم کمکتون کنم؟!?"
                  ></textarea>
                </div>

                <button className="flex-c-m stext-101 cl0 size-121 bg3 bor1 hov-btn3 p-lr-15 trans-04 pointer">
                  Submit
                </button>
              </form>
            </div>

            <div className="size-210 bor10 flex-w flex-col-m p-lr-93 p-tb-30 p-lr-15-lg w-full-md">
              <div className="flex-w w-full p-b-42">
                <span className="fs-18 cl5 txt-center size-211">
                  <span className="fa fa-location-arrow"></span>
                </span>

                <div className="size-212 p-t-2">
                  <span className="mtext-110 cl2">آدرس شرکت</span>

                  <p className="stext-115 cl6 size-213 p-t-18">
                  اراک-جهانپناه-برج طلایی-شماره پلاک545-5-465345
                  </p>
                </div>
              </div>

              <div className="flex-w w-full p-b-42">
                <span className="fs-18 cl5 txt-center size-211">
                  <span className="fa fa-phone"></span>
                </span>

                <div className="size-212 p-t-2">
                  <span className="mtext-110 cl2">بیایید صحبت کنیم</span>

                  <p className="stext-115 cl1 size-213 p-t-18">
                    +98 918 1236879
                  </p>
                </div>
              </div>

              <div className="flex-w w-full">
                <span className="fs-18 cl5 txt-center size-211">
                  <span className="fa fa-envelope-o"></span>
                </span>

                <div className="size-212 p-t-2">
                  <span className="mtext-110 cl2">پشتیبانی فروش</span>

                  <p className="stext-115 cl1 size-213 p-t-18">
                    contact@example.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
    
  );
};

export default Contact;
