import { ArrowLeftRounded, ArrowRightRounded } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { sliderData } from "../data/sliderData";

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
  transition: 1s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
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
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <div>
      <Container>
        <Arrow direction="left" onClick={() => handleClick("left")}>
          <ArrowLeftRounded />
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
          {sliderData.map((item) => (
            <Slide key={item.id}>
              <ImageContainer>
                <Image src={item.img} />
              </ImageContainer>
              <DetailsContainer>
                <Title>{item.title}</Title>
                <Description>{item.description}</Description>
                <Button>SHOP NOW</Button>
              </DetailsContainer>
            </Slide>
          ))}
        </Wrapper>
        <Arrow direction="right" onClick={() => handleClick("right")}>
          <ArrowRightRounded />
        </Arrow>
      </Container>
    </div>
  );
};

export default Slider;
