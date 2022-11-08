import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import ProductItems from "../components/ProductItems";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

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
  return (
    <div>
      <Container>
        <Navbar />
        <Header />
        <Title>Tops</Title>
        <FilterContainer>
          <Filter>
            <FilterText>FILTER PRODUCTS</FilterText>
            <Select>
              <Option disabled selected>
                Product Type
              </Option>
              <Option>Tank</Option>
              <Option>Tees</Option>
            </Select>
            <Filter />
            <Select>
              <Option disabled selected>
                Size
              </Option>
              <Option>XS</Option>
              <Option>S</Option>
              <Option>M</Option>
              <Option>L</Option>
              <Option>XL</Option>
            </Select>
          </Filter>
          <Filter>
            <FilterText>SORT BY</FilterText>
            <Select>
              <Option>Price: Low to High</Option>
              <Option>Price: High to Low</Option>
              <Option>Latest</Option>
              <Option>Best Seller</Option>
            </Select>
          </Filter>
        </FilterContainer>
        <ProductItems />
        <Newsletter />
        <Footer />
      </Container>
      ;
    </div>
  );
};

export default ProductPage;
