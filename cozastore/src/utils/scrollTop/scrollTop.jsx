import React, { useEffect } from "react";
const ScrollTop = () => {
    useEffect(() => {
        require("./scrollTop_jquery")
    }, []);
  return (
    <div className="btn-back-to-top" id="myBtn">
      <span className="symbol-btn-back-to-top">
        <i className="zmdi zmdi-chevron-up"></i>
      </span>
    </div>
  );
};

export default ScrollTop;
