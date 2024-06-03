import React from "react";
import Home from "./pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ProductDetails from "./pages/productDetails/ProductDetails";
// import Cart from "./components/popularProducts/cart/Cart";
import ScrollTop from "./components/scrollToTop/ScrollTop";
import Cart from "./pages/cart/Cart";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <ScrollTop />
        <Header />
        <div className="pt-[100px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/card/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
