import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

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

const Filter = styled.div``;
const FilterContainer = styled.div``;
const FilterTitle = styled.div``;
const FilterColour = styled.div``;

const DetailsContainer = styled.div`
  margin: 25px;
  padding: 20px;
  display: flex;
`;
const Description = styled.div`
  margin: 20px 0 px;
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
                <FilterColour></FilterColour>
                <FilterColour></FilterColour>
                <FilterColour></FilterColour>
              </Filter>
            </FilterContainer>
          </InfoContainer>
        </Wrapper>
        <DetailsContainer>
          <Description>
            <Title>Description</Title>
            <p>
              We are in love with our latest sports bra arrival and can't keep
              our eyes off. Constructed from organic cotton, this sports bra has
              a high neckline and offers extra coverage, ideal for yoga, pilates
              and other workouts.The eye catching cross back detail offers extra
              support.
            </p>
            <p>Key Features:</p>
            <li> Extra coverage at front </li>
            <li> Eye catching cross back detail</li>
            <li> Made of 90% organic cotton 10% Spandex</li>
          </Description>
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
        </DetailsContainer>
        <Newsletter />
        <Footer />
      </Container>
    </div>
  );
};

export default SingleProductPage;
