import React from "react";
import styled from "styled-components";
import { categories } from "../data/categoriesData";
import CategoriesItem from "./CategoriesItem";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;

const Title = styled.div`
  padding: 20px;
  font-size: 40px;
  font-weight: 900;
`;

const Categories = () => {
  return (
    <div>
      <Title> Our Products </Title>
      <Container>
        {categories.map((item) => (
          <CategoriesItem item={item} key={item.id} />
        ))}
      </Container>
    </div>
  );
};

export default Categories;
