import React from 'react';
import { Slide } from 'react-awesome-reveal';

const SearchShop = () => {
    return ( 
      <Slide  direction="right" className="w-100">
        <div className=" panel-search w-full p-t-10 p-b-15 ">
            <div className="bor8 dis-flex p-l-15">
              <button className="size-113 flex-c-m fs-16 cl2 hov-cl1 trans-04">
                <i className="zmdi zmdi-search"></i>
              </button>

              <input
                className="mtext-107 cl2 size-114 plh2 p-r-15"
                type="text"
                name="search-product"
                placeholder="Search"
              />
            </div>
          </div>
          </Slide>
     );
}
 
export default SearchShop;