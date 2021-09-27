import { createContext } from "react";

const NavContext = createContext({
  handleShowFavriteCart: () => {},
  handleShowSearchMain: () => {},
  showSearch: false,
  showCart: false,
});

export default NavContext;
