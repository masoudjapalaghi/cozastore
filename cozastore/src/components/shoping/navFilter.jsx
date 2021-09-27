import React, { useState } from "react";
import { withRouter } from "react-router";
import SearchShop from "./searchShop";
import FilterShop from "./filterShop"
const NavFilter = () => {
  const [toggleSearch, settoggleSearch] = useState(false);
  const [toggleFilter, settoggleFilter] = useState(false);
  let classBtnFilter =
  "flex-c-m stext-106 cl6 size-104 bor4 pointer hov-btn3 trans-04 m-r-8 m-tb-4";
  const handleShowSearch = () => {
    settoggleSearch(!toggleSearch);
  };
  const handleShowFilter = () => {
    settoggleFilter(!toggleFilter);
  };
  return (
    <section
      className="container rtl m-t-60"
    >
      <div className="flex-w flex-sb-m p-b-30">
        <div className="flex-w flex-l-m filter-tope-group m-tb-10">
          <button
            className="stext-106 cl6 hov1 bor3 trans-04  m-tb-5 how-active1"
            data-filter="*"
          >
            همه محصولات
          </button>

          <button
            className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5"
            data-filter=".women"
          >
            زنانه
          </button>

          <button
            className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5"
            data-filter=".men"
          >
            مردانه
          </button>

          <button
            className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5"
            data-filter=".bag"
          >
            کیف ها
          </button>

          <button
            className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5"
            data-filter=".shoes"
          >
            کفش ها
          </button>

          <button
            className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5"
            data-filter=".watches"
          >
            ساعت
          </button>
        </div>
        <div className="flex-w flex-c-m m-tb-10">
          <button
            className={
              toggleFilter
                ? `${classBtnFilter} show-filter`
                : `${classBtnFilter}`
            }
            onClick={handleShowFilter}
          >
            {toggleFilter ? (
              <i className="icon-close-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close p-l-15"></i>
            ) : (
              <i className="icon-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-filter-list p-l-15"></i>
            )}
            فیلتر
          </button>

          <button
            className={
              toggleSearch
                ? `${classBtnFilter} show-filter`
                : `${classBtnFilter}`
            }
            onClick={handleShowSearch}
          >
            {toggleSearch ? (
              <i className="icon-close-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close p-l-15"></i>
            ) : (
              <i className="icon-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-search p-l-15"></i>
            )}
            جستجو
          </button>
        </div>
        {toggleSearch ? <SearchShop /> : null}
        {toggleFilter ? <FilterShop /> : null}
      </div>
    </section>
  );
};

export default withRouter( NavFilter );
