import React, { useContext } from "react";
import { Slide } from "react-awesome-reveal";
import NavContext from './../../context/navContext';

const SearchBox = () => {
  const searchContext=useContext(NavContext);
  const {handleShowSearchMain}=searchContext
  return (
    
    <div className="modal-search-header flex-c-m trans-04 ">
      <Slide direction="down">
      <div className="container-search-header">
        <button className="flex-c-m btn-hide-modal-search trans-04" onClick={handleShowSearchMain} >
          <img src="images/icons/icon-close2.png" alt="CLOSE" />
        </button>

        <form className="wrap-search-header flex-w p-l-15">
          <button className="flex-c-m trans-04">
            <i className="zmdi zmdi-search"></i>
          </button>
          <input
            className="plh3"
            type="text"
            name="search"
            placeholder="Search..."
          />
        </form>
      </div>
        </Slide>
    </div>
  );
};

export default SearchBox;
