import React, { Fragment, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { clearProductCart } from "../../actions/addCart";
import { isEmpty, map } from "lodash";
import { toast } from "react-toastify";
import { addOrder, clearOrder } from "../../actions/order";
import { setOrderService } from "./../../services/orderServices";

const Features = () => {
  const [address, setAddress] = useState("");
  const [quantity, setquantity] = useState();
  const [cI, setCI] = useState([]);
  const cartProduct = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  const orders = useSelector((state) => state.order);
  const { username, email } = user;
  const {} = cartProduct;
  const dispatch = useDispatch();
  const handleClearCart = (cart) => {
    dispatch(clearProductCart(cart));
    toast.error(`${cart.name} از لیست خرید شما حذف شد.`, {
      position: "bottom-right",
    });
  };
  const handleCreateOrder = async (e) => {
    e.preventDefault();
    const order = {
      name: username,
      email: email,
      address: address,
      cartItems:cartProduct,
      total: cartProduct.reduce((a, c) => a + c.Price * c.quantity, 0),
    };
    try {
      const { status, data } = await setOrderService(order);
      if (status == 200) {
        if(isEmpty(orders)){
          dispatch(addOrder(data));
          toast.success("خرید شما موفقیت آمیز بود")
        }else if(orders.name===data.name){
          toast.success("خرید شما قبلا ثبت شده است.")
        }
      }
    } catch (ex) {
      console.log(ex)
    }
  };
  return (
    <Fragment>
      <Helmet>
        <title>کارت من</title>
      </Helmet>
      <form className="bg0 p-t-110 p-b-50"  onSubmit={handleCreateOrder}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-xl-7 m-lr-auto m-b-50">
              <div className="m-r-25 m-r--38 m-lr-0-xl">
                <div className="wrap-table-shopping-cart">
                  {!isEmpty(cartProduct) ? (
                    <table className="table-shopping-cart  rtl">
                      <tr className="table_head">
                        <th className="column-1 p-r-35">تصویر</th>
                        <th className="column-2">نام محصول</th>
                        <th className="column-2">رنگ</th>
                        <th className="column-2">سایز</th>
                        <th className="column-3 p-r-15">قیمت</th>
                        <th className="column-4 ">تعداد</th>
                        <th className="column-5 ">جمع</th>
                      </tr>
                      {cartProduct.map((cart) => (
                        <tr key={cart.id} className="table_row">
                          <td className="column-1">
                            <div className="itemcart1 pos-relative">
                              <div className=" pos-absolute a">
                                <button
                                  onClick={() => handleClearCart(cart)}
                                  className="fa fa-close hov-cl1 pos-absolute"
                                ></button>
                              </div>
                              <img src={`${cart.image[0].url}`} alt="IMG" />
                            </div>
                          </td>
                          <td className="column-2">{cart.name}</td>
                          <td className="column-2">
                            <select
                              defaultValue={cart.dataChoice.color}
                              onChange={(e) => {
                                cart.dataChoice.color = e.target.value;
                              }}
                              className="select_box w-75 form-control"
                              name="time"
                            >
                              {Object.values(cart.color).map((color) => (
                                <option> {color} </option>
                              ))}
                            </select>
                          </td>
                          <td className="column-2">
                            <select
                              defaultValue={cart.dataChoice.size}
                              onChange={(e) => {
                                cart.dataChoice.size = e.target.value;
                              }}
                              className="select_box w-75 form-control"
                              name="time"
                            >
                              {Object.values(cart.size).map((size) => (
                                <option> {size} </option>
                              ))}
                            </select>
                          </td>
                          <td className="column-3 text-center">
                            {" "}
                            {cart.Price} ریال
                          </td>
                          <td className="column-4 pt-2 pl-3">
                            <input
                              type="number"
                              className="form-control"
                              defaultValue={cart.quantity}
                              onChange={(e) => {
                                cart.quantity = e.target.value;
                                setquantity(e.target.value);
                              }}
                              min={1}
                              max={10}
                              mobile
                            />
                          </td>
                          <td className="column-5">
                            {Number(cart.Price) * cart.quantity} ریال
                          </td>
                        </tr>
                      ))}
                    </table>
                  ) : (
                    <div className="text-center pt-3">
                      <div
                        className="alert alert-info mx-auto w-75"
                        role="alert"
                      >
                        !!محصولی را اضافه نکرده اید
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex-w flex-sb-m bor15 p-t-18 p-b-15 p-lr-40 p-lr-15-sm">
                  <div className="flex-w flex-m m-r-20 m-tb-5">
                    <input
                      className="stext-104 cl2 plh4 size-117 bor13 p-lr-20 m-r-10 m-tb-5"
                      type="text"
                      name="coupon"
                      placeholder="Coupon Code"
                    />

                    <div className="flex-c-m stext-101 cl2 size-118 bg8 bor13 hov-btn3 p-lr-15 trans-04 pointer m-tb-5">
                      کد تخفیف
                    </div>
                  </div>

                  <div className="flex-c-m stext-101 cl2 size-119 bg8 bor13 hov-btn3 p-lr-15 trans-04 pointer m-tb-10">
                    حساب کن
                  </div>
                </div>
              </div>
            </div>

            <div className="  col-lg-4 col-sm-10  col-xl-5 m-lr-auto m-b-50 rtl">
              <div className="bor10 p-lr-40 p-t-30 p-b-40 m-l-63 m-r-40 m-lr-0-xl p-lr-15-sm">
                <h4 className="mtext-109 cl2 p-b-30">جمع سبد خرید شما</h4>

                <div className="flex-w flex-t bor12 p-b-13">
                  <div className="size-300">
                    <div className="stext-110 cl2">
                      {cartProduct.reduce(
                        (a, c) => a + c.Price * c.quantity,
                        0
                      )}{" "}
                      ریال
                    </div>
                  </div>

                  <div className="size-209">
                    <span className="mtext-110 cl2"></span>
                  </div>
                </div>

                <div className=" bor12 p-t-15 p-b-30">
                  <div className="size-209 w-100 p-r-18 p-r-0-sm w-full-ssm">
                    <div className="p-t-15">
                      <div className="bor8 bg0 m-b-12">
                        <textarea
                          className="stext-111 cl8 plh3 size-111 w-100 h-100 p-lr-15"
                          type="text"
                          name="state"
                          onChange={(e) => {
                            setAddress(e.target.value);
                          }}
                          placeholder="آدرس را همراه کدپستی وارد کنید."
                        />
                      </div>
                      <div className="flex-w "></div>
                    </div>
                  </div>
                </div>
                <input
                type="submit"
                value="پرداخت"
                  className="flex-c-m text-center f-w-400 fs-18 cl0 size-116 bg3 bor14 hov-btn3 p-lr-15 trans-04 pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default Features;
