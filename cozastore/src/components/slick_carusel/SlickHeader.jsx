import React from "react";
import Slider from "react-slick";
import {  Fade, Zoom, Roll, Slide, Rotate } from "react-awesome-reveal";
import { Link } from 'react-router-dom';
const SlickHeader = () => {
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnFocus: false,
    pauseOnHover: false,
    fade: true,
    speed: 1000,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: true,
    draggable: false,
  };
  return (
    <Slider {...settings}>
      <div className="item-slick1 item-slick_1 rtl">
        <div className="container h-full">
          <article className="flex-col-l-m h-full p-t-100 p-b-30 respon5">
            <Slide direction="down">
              <span className="ltext-101 cl2 respon2">
               کالکشن بانوان 2021
              </span>
            </Slide>
            <Fade delay="80">
            <Slide delay="90" direction="up">
            <h2 className="ltext-201 cl2 p-t-19 p-b-43 respon1">مجموعه جدید</h2>
            </Slide>
            </Fade>
            <Fade delay="160">
            <Zoom delay="180" >
            <Link
              to=""
              className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04"
            >
              خرید
            </Link>
            </Zoom>
            </Fade>
          </article>
        </div>
      </div>

      <div className="item-slick1 item-slick_2 rtl">
        <div className="container h-full">
          <article className="flex-col-l-m h-full p-t-100 p-b-30 respon5">
            <Roll>
              <span className="ltext-101 cl2 respon2">مجموعه جدید مردانه</span>
            </Roll>

            <Fade delay="80">
              <Slide delay="90" direction="right">
                <h2 className="ltext-201 cl2 p-t-19 p-b-43 respon1">
                  جاکت و کت
                </h2>
              </Slide>
            </Fade>
            <Fade delay="160">
              <Slide delay="170" direction="up">
                <Link
                  to=""
                  className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04"
                >
                  خرید
                </Link>
              </Slide>
            </Fade>
          </article>
        </div>
      </div>

      <div className="item-slick1 item-slick_3 rtl">
        <div className="container h-full">
          <article className="flex-col-l-m h-full p-t-100 p-b-30 respon5">
            <Rotate direction="bottom-right">
              <span className="ltext-101 cl2 respon2">کالکشن مردانه 2021</span>
            </Rotate>

            <Fade delay="80">
              <Rotate delay="90" direction="top-left">
                <h2 className="ltext-201 cl2 p-t-19 p-b-43 respon1">
                  بروزرسانی شد
                </h2>
              </Rotate>
            </Fade>
            <Fade delay="160">
              <Rotate delay="180">
                <Link
                  to=""
                  className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04"
                >
                  خرید
                </Link>
              </Rotate>
            </Fade>
          </article>
        </div>
      </div>
    </Slider>
  );
};

export default SlickHeader;
