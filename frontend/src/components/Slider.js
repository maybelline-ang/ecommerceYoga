import { ArrowLeftRounded, ArrowRightRounded } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  //   background-color: coral;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "20px"};
  right: ${(props) => props.direction === "right" && "20px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.6;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(-200vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-item: center;
`;

const ImageContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 80%;
`;

const DetailsContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h2`
  font-size: 50px;
  font-weight: bold;
`;
const Description = styled.p`
  margin: 30px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 14px;
  background-color: transparent;
  cursor: pointer;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {};
  return (
    <div>
      <Container>
        <Arrow direction="left" onClick={() => handleClick("left")}>
          <ArrowLeftRounded />
        </Arrow>
        <Wrapper>
          <Slide>
            <ImageContainer>
              <Image src="https://cdn.shopify.com/s/files/1/0945/8898/files/AUG2022_WomensSWEAT_Edited39_1000x.jpg?v=1666149808" />
            </ImageContainer>
            <DetailsContainer>
              <Title>HELLO YOGA Super Sale 2022</Title>
              <Description>
                SALE IS NOW ON.
                <br></br>GET THEM BEFORE SALE ENDS ON 11/11
              </Description>
              <Button>SHOP NOW</Button>
            </DetailsContainer>
          </Slide>
          <Slide>
            <ImageContainer>
              <Image src="https://cdn.shopify.com/s/files/1/0945/8898/files/Shoes21-edit_4_2000x.jpg?v=1614156922" />
            </ImageContainer>
            <DetailsContainer>
              <Title>NEW ARRIVALS</Title>
              <Description>
                SHOP THE LATEST TRENDIEST LOOKS
                <h6>*LAUNCHING 18 NOV AT 12PM</h6>
              </Description>
              <Button>SHOP NOW</Button>
            </DetailsContainer>
          </Slide>
          <Slide>
            <ImageContainer>
              <Image src="https://cdn.shopify.com/s/files/1/0945/8898/files/KYDRA-SWEATINSTYLE-4944-Edit_1400x.jpg?v=1645094923" />
            </ImageContainer>
            <DetailsContainer>
              <Title>SUSTAINABLE & ETHICALLY MADE</Title>
              <Description>
                TIMELESS, ECO-FRIENDLY, AND VERSATILE YOGA WEAR
              </Description>
              <Button>SHOP NOW</Button>
            </DetailsContainer>
          </Slide>
        </Wrapper>
        <Arrow direction="right" onClick={() => handleClick("right")}>
          <ArrowRightRounded />
        </Arrow>
      </Container>
    </div>
  );
};

export default Slider;
