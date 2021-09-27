import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import NavFilter from "./navFilter.jsx";
import { useDispatch, useSelector } from "react-redux";
import { addProductFav, clearProductFav } from "../../actions/addFavorite";
import { toast } from "react-toastify";
import { addIconFav, clearIconFav } from "./../../actions/addIconFavorite";

const Shop = ({ products, location }) => {
  const { pathname } = location;
  const iconFavorite = useSelector((state) => state.icon);

  const dispatch = useDispatch();

  const handleAddFavorite = async (product) => {
    const favoriteUniq = iconFavorite.find((item) => item === product._id);
    if (favoriteUniq) {
      dispatch(clearIconFav(product._id));
      dispatch(clearProductFav(product));
      toast.warn(` ${product.name} از مورد علاقه کاسته شد.`,{
        position:"bottom-right"
      });
    } else {
      dispatch(addProductFav(product));
      dispatch(addIconFav(product._id));
      toast.success(` ${product.name} به مورد علاقه  اضافه شد.`);
    }
  };
  return (
    <Fragment>
      <div className="container">
        {pathname === "/mainshop" ? (
          <NavFilter />
        ) : (
          <header className="section_heading text-center p-tb-30">
            <div>
              <h2>New Arrivals</h2>
            </div>
          </header>
        )}

        <div className="row isotope-grid rtl">
          {products.map((product, index) => (
            <div
              key={product._id}
              className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women"
            >
              <article className="block2">
                <section className="block2-pic hov-img0">
                  <LazyLoadImage
                    src={
                      product.image[0].url
                        ? `${product.image[0].url}`
                        : null
                    }
                    alt="IMG-PRODUCT"
                    effect="blur"
                    placeholderSrc={
                      process.env.PUBLIC_URL + "/images/icons/logo-01.png"
                    }
                  />

                  <Link
                    to={`/singleshop/${product._id}`}
                    className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04"
                  >
                    مشاهده
                  </Link>
                </section>

                <div className="block2-txt flex-w flex-t p-t-14">
                  <section className="block2-txt-child1 flex-col-l ">
                    <Link
                      to={`/singleshop/${product._id}`}
                      className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                    >
                      {product.name}
                    </Link>

                    <span className="stext-105 cl3">{` ${product.Price}   ریال  `}</span>
                  </section>
                  <div className="block2-txt-child2 flex-r p-t-3">
                    <button
                      onClick={() => handleAddFavorite(product)}
                      className="btn-addwish-b2 dis-block pos-relative js-addwish-b2 js-addedwish-b2"
                    >
                      <i
                        className={
                          iconFavorite.includes(product._id)
                            ? "fa fa-heart text-primary"
                            : "fa fa-heart-o "
                        }
                      ></i>
                    </button>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>

        {pathname === "/" ? (
          <div className="flex-c-m flex-w w-full p-t-25 pb-5">
            <Link
              to="mainshop"
              className="flex-c-m stext-101 cl5 size-103 bg2 bor1 hov-btn1 p-lr-15 trans-04"
            >
              مشاهده بیشتر
            </Link>
          </div>
        ) : null}
      </div>
    </Fragment>
  );
};

export default withRouter(Shop);
