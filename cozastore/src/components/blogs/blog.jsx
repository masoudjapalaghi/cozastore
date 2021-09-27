import React, { Fragment, useState } from "react";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { paginate } from "../../utils/paginate";
import AsideBlog from "../common/asideBlog";
import Pagination from "../common/Pagination";

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(3);
  const articls = useSelector((state) => state.articls);
  const articlsPaginate = paginate(articls, currentPage, perPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <Fragment>
      <Helmet>
        <title>وبلاگ</title>
      </Helmet>
      <section className="bg-img1 bg-img1-blog txt-center p-lr-15 p-tb-92">
        <h2 className="ltext-105 cl0 txt-center">Blog</h2>
      </section>

      <section className="bg0 p-t-62 p-b-60">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-lg-9 p-b-80">
              <div className="p-r-45 p-r-0-lg">
                {articlsPaginate.map((article) => (
                  <article key={article._id} className="p-b-63 rtl">
                    <Link
                      to={`/singleblog/${article.slug}`}
                      className="hov-img0 how-pos5-parent"
                    >
                      <LazyLoadImage
                        src={`${article.imageUrl.url}`}
                        alt="IMG-BLOG"
                        effect="blur"
                        placeholderSrc={
                          process.env.PUBLIC_URL + "/images/icons/logo-01.png"
                        }
                      />

                      <div className="flex-col-c-m size-123 bg9 how-pos5">
                        <span className="stext-110 cl3 txt-center">
                          {article.date}
                        </span>
                      </div>
                    </Link>

                    <div className="p-t-32 ">
                      <h4 className="p-b-15">
                        <Link
                          to={`/singleblog/${article.slug}`}
                          className="ltext-108 cl2 hov-cl1 trans-04"
                        >
                          {article.title}
                        </Link>
                      </h4>

                      <p className="stext-117 cl6">{article.body}</p>

                      <div className="flex-w flex-sb-m p-t-18">
                        <span className="flex-w flex-m stext-111 cl2 p-r-30 m-tb-10">
                          <span>
                            <span className="cl4">By</span> Admin
                            <span className="cl12 m-l-4 m-r-6">|</span>
                          </span>

                          <span>
                            استیل خیابانی, مد, Couple
                            <span className="cl12 m-l-4 m-r-6">|</span>
                          </span>

                          <span>8 کامنت</span>
                        </span>

                        <Link
                          to={`/singleblog/${article.slug}`}
                          className="stext-101 cl2 hov-cl1 trans-04 m-tb-10"
                        >
                          بیشتر
                          <i className="fa fa-long-arrow-right m-l-9"></i>
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}

                <Pagination
                  total={articls.length}
                  currentPage={currentPage}
                  perPage={perPage}
                  onPageChange={handlePageChange}
                />
              </div>
            </div>

            <AsideBlog />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Blog;
