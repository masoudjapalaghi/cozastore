import React, { useEffect, useState } from "react";
import { Zoom } from "react-awesome-reveal";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, withRouter } from "react-router";
import { addProductCart } from "../../actions/addCart";
import { productIdValidator } from "../../utils/IdValidator";
import SlickShop from "../slick_carusel/slickShop";
import { getSingleProduct } from "../../actions/product";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const ModalShop = (props) => {
  const [sizeInput, setSizeInput] = useState("");
  const [colorInput, setColorInput] = useState("");
  const product = useSelector((state) => state.product);
  const productsInCart = useSelector((state) => state.cart);
  const id = props.match.params.id;
  const { name, Price, body, color, size } = product;
  const dispatch = useDispatch();
  useEffect(() => {
    if (productIdValidator(id)) dispatch(getSingleProduct(id));
  }, []);
  const cartProduct = useSelector((state) => state.cart);
  if (!color || !size) {
    return <span>Loading...</span>;
  } else {
    var changeColor = Object.values(color);
    var changesize = Object.values(size);
  }
  const handleCloseModale = () => {
    props.history.goBack();
  };

  const handleAddCart = async (event) => {
    event.preventDefault();
    const dataChoice = {
      color: colorInput,
      size: sizeInput,
    };
    const productUniq = productsInCart.find((item) => item._id === product._id);
    if (productUniq) {
      toast.warn(` ${product.name} قبلا به سبد شما اضافه شده است.`,{
        position:'bottom-right'
      });
      handleCloseModale();
    } else {
      dispatch(addProductCart({ ...product, dataChoice }));
      toast.success(`${product.name} به سبد اضافه شد.`);
      handleCloseModale();
    }
  };
  if (!productIdValidator(id)) return <Redirect to="/404" />;
  return (
    <div className="wrap-modal1  p-t-60 p-b-20">
      <div className="overlay-modal1"></div>
      <div className="container ">
        <Zoom>
          <div className="bg0 p-t-60 p-b-30 p-lr-15-lg how-pos3-parent ">
            <button
              className="how-pos3 hov3 trans-04 js-hide-modal1"
              onClick={handleCloseModale}
            >
              <img src="../images/icons/icon-close.png" alt="CLOSE" />
            </button>

            <div className="row ">
              <SlickShop producturl={product} />
              <div className="col-md-6 col-lg-5 p-b-30 rtl">
                <div className="p-r-50 p-t-5 p-lr-0-lg">
                  <h4 className="mtext-105 cl2 js-name-detail p-b-14">
                    {name}
                  </h4>

                  <span className="mtext-106 cl2">{`${Price}  ریال`}</span>

                  <p className="stext-102 cl3 p-t-23">{body}</p>

                  <form
                    onSubmit={handleAddCart}
                    className="p-t-33"
                    method="post"
                  >
                    <div className="flex-w flex-r-m p-b-30">
                      <div className="size-203 flex-c-m respon6">Size</div>
                      <div className="size-204 respon6-next ">
                        <div className="rs1-select2 bor0 bg0">
                          <select
                            onChange={(e) => {
                              setSizeInput(e.target.value);
                            }}
                            className="select_box w-100 form-control"
                            name="time"
                          >
                            {changesize.map((size) => (
                              <option> {size} </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="flex-w flex-r-m p-b-30">
                      <div className="size-203 flex-c-m respon6">Color</div>

                      <div className="size-204 respon6-next">
                        <div className="rs1-select2 bor0 bg0">
                          <select
                            onChange={(e) => {
                              setColorInput(e.target.value);
                            }}
                            className="select_box w-100 form-control"
                            name="time"
                          >
                            {changeColor.map((color) => (
                              <option>{color}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="flex-w flex-r-m p-b-10 ">
                      <div className=" size-204 flex-w flex-m respon6-next justify-content-center">
                        <button
                          className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 text-center pointer  trans-04 "
                          id="submit"
                        >
                          add to cart
                        </button>
                      </div>
                    </div>
                  </form>

                  <div className="flex-w flex-m p-l-100 p-t-80 respon7 m-r-180">
                    <div className="flex-m bor9 p-r-10 m-r-11">
                      <Link
                        to=""
                        className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 js-addwish-detail tooltip100"
                        data-tooltip="Add to Wishlist"
                      >
                        <i className="zmdi zmdi-favorite"></i>
                      </Link>
                    </div>

                    <Link
                      to=""
                      className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100"
                      data-tooltip="Facebook"
                    >
                      <i className="fa fa-facebook"></i>
                    </Link>

                    <a
                      href="#"
                      className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100"
                      data-tooltip="Twitter"
                    >
                      <i className="fa fa-twitter"></i>
                    </a>

                    <a
                      href="#"
                      className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100"
                      data-tooltip="Google Plus"
                    >
                      <i className="fa fa-google-plus"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Zoom>
      </div>
    </div>
  );
};

export default withRouter(ModalShop);
