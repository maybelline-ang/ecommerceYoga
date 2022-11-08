import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;
const ImageContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 85%;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;
const Title = styled.h1`
  font-weight: 600;
`;

const Price = styled.h3`
  font-weight: 100;
  font-size: 20px;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: 30px 0px;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColour = styled.div`
  width: 20px;
  height: 20px;
  margin: 10px 5 px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Quantity = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid red;
  display: flex;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: none;
  background-color: teal;
  cursor: pointer;
  font-weight: 800;
`;

const DetailsContainer = styled.div`
  margin: 25px;
  padding: 20px;
  display: flex;
`;
const Description = styled.div`
  margin: 20px 0 px;
`;

const Left = styled.div`
  flex: 1.5;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 0.8;
  margin-right: 20px;
`;

const Right = styled.div`
  flex: 0.8;
`;

const SingleProductPage = () => {
  return (
    <div>
      <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
          <ImageContainer>
            <Image src="https://cdn.shopify.com/s/files/1/0945/8898/products/SavannahTank_Rouge_003_1000x.jpg?v=1647570959"></Image>
          </ImageContainer>
          <InfoContainer>
            <Title>Back Cut Tank - Rouge </Title>
            <Price>SGD 58</Price>
            <FilterContainer>
              <Filter>
                <FilterTitle>Color</FilterTitle>
                <FilterColour color="black"></FilterColour>
                <FilterColour color="red"></FilterColour>
                <FilterColour color="beige"></FilterColour>
              </Filter>
              <Filter>
                <FilterTitle>Size</FilterTitle>
                <FilterSize>
                  <FilterSizeOption>XS</FilterSizeOption>
                  <FilterSizeOption>S</FilterSizeOption>
                  <FilterSizeOption>M</FilterSizeOption>
                  <FilterSizeOption>L</FilterSizeOption>
                  <FilterSizeOption>XL</FilterSizeOption>
                </FilterSize>
              </Filter>
            </FilterContainer>
            <AddContainer>
              <QuantityContainer>
                <Remove />
                <Quantity>1</Quantity>
                <Add />
              </QuantityContainer>
              <Button> Add to Cart</Button>
            </AddContainer>
          </InfoContainer>
        </Wrapper>
        <DetailsContainer>
          <Left>
            <Description>
              <Title>Description</Title>
              <p>
                We are in love with our latest sports bra arrival and can't keep
                our eyes off. Constructed from organic cotton, this sports bra
                has a high neckline and offers extra coverage, ideal for yoga,
                pilates and other workouts.The eye catching cross back detail
                offers extra support.
              </p>
              <p>Key Features:</p>
              <li> Extra coverage at front </li>
              <li> Eye catching cross back detail</li>
              <li> Made of 90% organic cotton 10% Spandex</li>
            </Description>
          </Left>
          <Center>
            <Description>
              <Title>Size & Fit </Title>
              Fit: <li>Relaxed - Oversized with room all around</li>
              <li> Slit Back </li>
              <p></p>
              Model wears:
              <li>Size S</li>
              Model's height:
              <li>172 cm</li>
              Fabric:
              <li>94% Cotton, 6% Spandex</li>
            </Description>
          </Center>
          <Right>
            <Description>
              <Title>Material</Title>
              <li> Breathable cotton seamless</li>
              <li> Light, everyday support for studio & street </li>
              <li>4-Way stretch for a move-with-you feel</li>
              <li>Moisture-wicking</li>
              <li>
                Machine wash cold on gentle cycle, inside out. with like colors.
              </li>
              <li> Tumble dry low; low iron. Do not dry clean.</li>
            </Description>
          </Right>
        </DetailsContainer>
        <Newsletter />
        <Footer />
      </Container>
    </div>
  );
};

export default SingleProductPage;
