import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
const Banner = () => {
  return (
    <section className="sec-banner bg0 p-t-80  rtl">
      <div className="container">
        <div className="row">
          <article className="col-md-6 col-xl-4 p-b-30 m-lr-auto ">
            <div className="block1 wrap-pic-w">
              <LazyLoadImage
                src="images/banner-01.jpg"
                alt="IMG-BANNER"
                effect="blur"
                
              />

              <a
                href="product.html"
                className="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3"
              >
                <div className="block1-txt-child1 flex-col-l">
                  <span className="block1-name ltext-102 trans-04 p-b-8">
                    زنانه
                  </span>

                  <span className="block1-info stext-102 trans-04">
                    بهار 2021
                  </span>
                </div>

                <div className="block1-txt-child2 p-b-4 trans-05">
                  <div className="block1-link stext-101 cl0 trans-09">
                    بیشتر
                  </div>
                </div>
              </a>
            </div>
          </article>

          <article className="col-md-6 col-xl-4 p-b-30 m-lr-auto">
            <div className="block1 wrap-pic-w">
              <LazyLoadImage
                src="images/banner-02.jpg"
                alt="IMG-BANNER"
                effect="blur"
                
              />

              <a
                href="product.html"
                className="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3"
              >
                <div className="block1-txt-child1 flex-col-l">
                  <span className="block1-name ltext-102 trans-04 p-b-8">
                    مردانه
                  </span>

                  <span className="block1-info stext-102 trans-04">
                    بهار 2021
                  </span>
                </div>

                <div className="block1-txt-child2 p-b-4 trans-05">
                  <div className="block1-link stext-101 cl0 trans-09">
                    بیشتر
                  </div>
                </div>
              </a>
            </div>
          </article>

          <article className="col-md-6 col-xl-4 p-b-30 m-lr-auto">
            <div className="block1 wrap-pic-w">
              <LazyLoadImage
                src="images/banner-03.jpg"
                alt="IMG-BANNER"
                effect="blur"
                
              />

              <a
                href="product.html"
                className="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3"
              >
                <div className="block1-txt-child1 flex-col-l">
                  <span className="block1-name ltext-102 trans-04 p-b-8">
                    جانبی
                  </span>

                  <span className="block1-info stext-102 trans-04">جدید</span>
                </div>

                <div className="block1-txt-child2 p-b-4 trans-05">
                  <div className="block1-link stext-101 cl0 trans-09">
                    بیشتر
                  </div>
                </div>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Banner;
