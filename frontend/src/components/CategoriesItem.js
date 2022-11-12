import React from "react";
import { Link } from "react-router-dom";
import styled, { withTheme } from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`;
const Button = styled.button`
  background-color: white;
  color: gray;
  cursor: pointer;
  border: none;
  padding: 10px;
  font-weight: 750;
`;

const CategoriesItem = ({ item }) => {
  return (
    <div>
      <Container>
        <Link to={`/products/${item.category}`}>
          <Image src={item.img} />
          <Info>
            <Title>{item.title}</Title>
            <Button>SHOP NOW</Button>
          </Info>
        </Link>
      </Container>
    </div>
  );
};

export default CategoriesItem;
