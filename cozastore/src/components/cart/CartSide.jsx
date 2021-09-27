import React, { useContext } from "react";
import { Slide } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "lodash";
import { toast } from "react-toastify";
import NavContext from "../../context/navContext";
import { clearProductFav } from "../../actions/addFavorite";
import { addProductCart } from "../../actions/addCart";
import { clearIconFav } from './../../actions/addIconFavorite';

const CartSide = () => {
  const cartContext = useContext(NavContext);
  const { showCart, handleShowFavriteCart } = cartContext;
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorite);
  const productAddCart = useSelector((state) => state.cart);

  const handleClearCart = (favorite) => {
    dispatch(clearProductFav(favorite));
    dispatch(clearIconFav(favorite._id))
    toast.warn(`${favorite.name}  از مورد علاقه شما کاسته شد.`,{
      position:"bottom-right"
    })
  };
  const handleAddCart = (e, favorite) => {
    const dataChoice = {
      color: "black",
      size: "L",
    };
    e.preventDefault();
    const productUniq = productAddCart.find(
      (item) => item._id === favorite._id
    );
    if (productUniq) {
      toast.warn(` ${favorite.name} قبلا به سبد شما اضافه شده است.`,{
        position:"bottom-right"
      });
    } else {
      dispatch(addProductCart({ ...favorite, dataChoice}));
      toast.success(`${favorite.name} به سبد اضافه شد.`);
    }
  };
  return (
    <aside
      className={
        showCart
          ? "wrap-header-cart show-header-cart rtl"
          : "wrap-header-cart rtl"
      }
    >
      <Slide direction="right">
        <div className="s-full js-hide-cart"></div>

        <div className="header-cart flex-col-l p-l-10 p-r-25">
          <div className="header-cart-title flex-w flex-sb-m p-b-8">
            <span className="mtext-103 cl2 pl-2">
              <i className="zmdi zmdi-star-border pr-2 text-primary"></i>مورد
              علاقه شما
            </span>

            <button
              className="fs-35 lh-10 cl2 p-lr-5 pointer hov-cl1 trans-04 js-hide-cart"
              onClick={handleShowFavriteCart}
            >
              <i className="zmdi zmdi-close"></i>
            </button>
          </div>

          <div className="header-cart-content flex-w js-pscroll w-75">
            {!isEmpty(favorites) ? (
              <ul className="header-cart-wrapitem w-full">
                {favorites.map((favorite) => (
                  <li
                    key={favorite._id}
                    className="header-cart-item flex-w flex-t m-b-12"
                  >
                    <div className="header-cart-item-img">
                    <button
                          onClick={() => handleClearCart(favorite)}
                          className="fa fa-close hov-bg1"
                        ></button>
                      <img
                        src={`${favorite.image[0].url}`}
                        alt="IMG"
                      />
                    </div>

                    <div className="header-cart-item-txt flex-w flex-t justify-content-between  p-t-8">
                      <div className="ml-4">
                        <Link
                          to=""
                          className="header-cart-item-name m-b-20 hov-cl1 trans-04"
                        >
                          {favorite.name}
                        </Link>

                        <span className="header-cart-item-info">
                          {favorite.Price} ریال
                        </span>
                      </div>
                      <div className="">
                      
                        <form
                          method="post"
                          onSubmit={(e) => handleAddCart(e, favorite)}
                        >
                          <button type="submit">
                          <i class="zmdi zmdi-shopping-cart-plus text-info fs-19 hov3"></i>
                          </button>
                        </form>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="alert alert-info w-100" role="alert">
                محصولی را اضافه نکرده اید!!
              </div>
            )}
          </div>
        </div>
      </Slide>
    </aside>
  );
};

export default CartSide;
