import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopText = styled.div`
  text-decoration: underline;
  cursor: pointer;
  margin: 0, 10px;
`;

const Bottom = styled.div`
  display: flex;

  justify-content: space-between;
`;
const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 200px;
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const ProductSize = styled.span``;
const PriceDetail = styled.span`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20;
`;
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
`;

const Summary = styled.div`
  flex: 1;
`;

const Cart = () => {
  return (
    <div>
      <Container>
        <Navbar />
        <Header />
        <Wrapper>
          <Title>Your Bag</Title>
          <Top>
            <TopButton>Continue Shopping</TopButton>
            <TopText>Shopping Bag (2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
            <TopButton type="filled">Checkout Now</TopButton>
          </Top>
          <Bottom>
            <Info>
              <Product>
                <ProductDetail>
                  <Image src="https://cdn.shopify.com/s/files/1/0945/8898/products/SavannahTank_Rouge_003_1000x.jpg?v=1647570959"></Image>
                  <Details>
                    <ProductName>
                      <b>Product:</b>Back Cut Tank - Rouge
                    </ProductName>
                    <ProductId>
                      <b>ID: </b>12938294
                    </ProductId>
                    <b>Colour: </b>
                    <ProductColor color="pink" />
                    <ProductSize>
                      <b>Size: </b>M
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add />
                    <ProductAmount>1</ProductAmount>
                    <Remove />
                  </ProductAmountContainer>
                  <ProductPrice>SGD 58</ProductPrice>
                </PriceDetail>
              </Product>
            </Info>
            <Summary>Summary</Summary>
          </Bottom>
        </Wrapper>

        <Footer />
      </Container>
    </div>
  );
};

export default Cart;
