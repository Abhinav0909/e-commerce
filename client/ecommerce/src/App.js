import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalState from "./context/GlobalState";
import ProductsPage from "./pages/Products";
import CartPage from "./pages/Cart";
import "./App.css";

const App = (props) => {
  return (
    <BrowserRouter>
      <GlobalState>
        <Routes>
          <Route path="/" element={<ProductsPage/>} />
          <Route path="/cart" element={<CartPage/>} />
        </Routes>
      </GlobalState>
    </BrowserRouter>
  );
};

export default App;
