import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ProductPage from "./pages/ProductPage";
import SingleProductPage from "./pages/SingleProductPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import Cart from "./pages/Cart";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
        <Routes>
          <Route path="/products/:category" element={<ProductPage />} />
        </Routes>
        <Routes>
          <Route path="/product/:id" element={<SingleProductPage />} />
        </Routes>
        <Routes>
          <Route exact path="/register" element={<RegisterPage />} />
        </Routes>
        <Routes>
          <Route exact path="/login" element={<LoginPage />} />
        </Routes>
        <Routes>
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
