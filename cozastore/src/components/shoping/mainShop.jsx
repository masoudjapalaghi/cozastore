import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import { withRouter } from "react-router";
import { paginate } from "../../utils/paginate";
import Pagination from "../common/Pagination";
import Shop from "./shop";

const MainShop = ({ location }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(16);
  const products = useSelector((state) => state.products);

  const mainShopProducts = paginate(products, currentPage, perPage);
  const { pathname } = location;
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <main className="bg0 p-t-23 p-b-140">
      {pathname === "/shop" ? (
        <Helmet>
          <title>فروشگاه</title>
        </Helmet>
      ) : null}
      <Shop products={mainShopProducts} />
      <Pagination
        total={products.length}
        currentPage={currentPage}
        perPage={perPage}
        onPageChange={handlePageChange}
      />
    </main>
  );
};

export default withRouter(MainShop);
