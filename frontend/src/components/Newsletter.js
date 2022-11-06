import { Send } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 30px;
  margin-bottom: 20px;
`;

const Description = styled.div`
  font-size: 20px;
  font-weight: 300;
  margin-bottom: 20px;
`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
`;

const Input = styled.input`
  border: none;
  flex: 6;
  padding-left: 20px;
  justify-content: center;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: rgb(8, 48, 56);
  color: white;
`;

const Newsletter = () => {
  return (
    <div>
      <Container>
        <Title>Join us now and get 20% off your first order!</Title>
        <Description>
          Be the FIRST to be notified of Hello Yoga updates!
        </Description>
        <InputContainer>
          <Input placeholder="Your email" />
          <Button>
            <Send />
          </Button>
        </InputContainer>
      </Container>
    </div>
  );
};

export default Newsletter;
