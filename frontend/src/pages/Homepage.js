import React from "react";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import ProductItems from "../components/ProductItems";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <div>
      <Announcement />
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
