import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import ProductItems from "../components/ProductItems";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
  display: flex;
`;

const FilterText = styled.span`
  font-size: 18px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;

const Option = styled.option``;

const ProductPage = () => {
  const location = useLocation();
  const category = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("bestseller");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value.toLowerCase(),
    });
  };

  return (
    <div>
      <Container>
        <Navbar />
        <Header />
        <Title>{category}</Title>
        <FilterContainer>
          <Filter>
            <FilterText>FILTER PRODUCTS</FilterText>
            <Select name="color" onChange={handleFilters}>
              <Option disabled> Colour </Option>
              <Option>Black</Option>
              <Option>Pink</Option>
              <Option>Blue</Option>
              <Option>Red</Option>
              <Option>Yellow</Option>
              <Option>Gray</Option>
              <Option>Purple</Option>
              <Option>White</Option>
            </Select>
            <Filter />
            <Select name="size" onChange={handleFilters}>
              <Option disabled>Size</Option>
              <Option>XS</Option>
              <Option>S</Option>
              <Option>M</Option>
              <Option>L</Option>
              <Option>XL</Option>
            </Select>
          </Filter>
          <Filter>
            <FilterText>SORT BY</FilterText>
            <Select onChange={(e) => setSort(e.target.value)}>
              <Option value="ascending">Price: Low to High</Option>
              <Option value="descending">Price: High to Low</Option>
              <Option value="latest">Latest</Option>
              <Option value="bestseller">Best Seller</Option>
            </Select>
          </Filter>
        </FilterContainer>
        <ProductItems category={category} filters={filters} sort={sort} />
        <Newsletter />
        <Footer />
      </Container>
      ;
    </div>
  );
};

export default ProductPage;
