import { Announcement } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  height: 100%;
  padding: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  justify-content: center;
  font-size: 40px;
  font-weight: 800;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  height: 50px;
  border-color: light gray;
`;
const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;
const Button = styled.button`
  wdith: 40%;
  border: none;
  padding: 15px 20px;
  background-colour: black;
  cursor: pointer;
`;

const RegisterPage = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Container>
        <Wrapper>
          <Title>Create Account</Title>
          <Form>
            <Input placeholder="name" />
            <Input placeholder="last name" />
            <Input placeholder="username" />
            <Input placeholder="email" />
            <Input placeholder="password" />
            <Input placeholder=" confirm password" />
            <Agreement>
              By creating an account, I constent to the processing of my
              personal data in accordance with the <b> Privacy Policy</b>
            </Agreement>
            <Button>Create</Button>
          </Form>
        </Wrapper>
      </Container>
      <Footer />
    </div>
  );
};

export default RegisterPage;
