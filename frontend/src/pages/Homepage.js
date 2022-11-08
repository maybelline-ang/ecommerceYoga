import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import ProductItems from "../components/ProductItems";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Slider />
      <Categories />
      <ProductItems />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Homepage;
