import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { CookiesProvider } from "react-cookie";
import ScrollTop from "../utils/scrollTop/scrollTop";
import CozaStore from "./cozaStore";

function App() {
  return (
    <BrowserRouter>
      <CookiesProvider>
        <CozaStore />
        <ScrollTop />
      </CookiesProvider>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
