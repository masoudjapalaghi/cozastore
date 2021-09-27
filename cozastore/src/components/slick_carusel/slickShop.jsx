import React from "react";
import {  useSelector } from "react-redux";
import Slider from "react-slick";


const SlickShop = () => {
  const product = useSelector((state) => state.product);
  const {image}=product
  if (!image) {
    return <span>Loading...</span>;
  }
  return (
    <div className="col-md-6 col-lg-7 p-b-30">
      <div className="p-l-25 p-r-30 p-lr-0-lg">
        <div className="wrap-slick3 flex-sb flex-w">
          <Slider className="slick3 gallery-lb">
            <div
              className="item-slick3"
              data-thumb="images/product-detail-01.jpg"
            >
              <div className="wrap-pic-w pos-relative">
                  <img
                  src={`${image[0].url}`}
                  alt="IMG-PRODUCT"
                />
              </div>
            </div>

            <div
              className="item-slick3"
              data-thumb="images/product-detail-02.jpg"
            >
              <div className="wrap-pic-w pos-relative">
                <img
                  src={`${image[0].url}`}
                  alt="IMG-PRODUCT"
                />
              </div>
            </div>

            <div
              className="item-slick3"
              data-thumb="images/product-detail-03.jpg"
            >
              <div className="wrap-pic-w pos-relative">
                <img
                  src={`${image[0].url}`}
                  alt="IMG-PRODUCT"
                />
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default SlickShop;
