import React, { useState } from "react";
import NavContext from "./navContext";
import CartSide from "../components/cart/CartSide";
import SearchBox from "../components/common/SearchBox";
import Mobilemenu from './../components/navs/mobileMenu';

const NavGlobalState = ({ children }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const handleShowSearchMain = () => {
    setShowSearch(!showSearch);
  };
  const handleShowFavriteCart = () => {
    setShowCart(!showCart);
  };
  
  return (
    <NavContext.Provider
      value={{
        handleShowFavriteCart,
        handleShowSearchMain,
        showCart,
        showSearch,
      }}
    >
      {showSearch ? <SearchBox /> : null}
      {showCart ? <CartSide /> : null}

      {children}
    </NavContext.Provider>
  );
};
export default NavGlobalState;
