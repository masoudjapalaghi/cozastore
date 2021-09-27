import React from "react";
import { range } from "lodash";
import { Link } from "react-router-dom";

const Pagination = ({ total, currentPage, perPage, onPageChange }) => {
  const pageCount = Math.ceil(total/ perPage);
  if (pageCount === 1) return null;

  const pages = range(1, pageCount + 1);
  return (
    <nav aria-label="Page navigation">
        <ul className="pagination justify-content-center d-flex  ">
            {pages.map(page => (
                <li
                    key={page}
                    className={
                        page === currentPage
                            ? "page-item active"
                            : "page-item"
                    }
                >
                    <Link
                        className="page-link"
                        style={{ cursor: "pointer" }}
                        onClick={() => onPageChange(page)}
                    >
                        {page}
                    </Link>
                </li>

            ))}
        </ul>
    </nav>
  );
};

export default Pagination;
