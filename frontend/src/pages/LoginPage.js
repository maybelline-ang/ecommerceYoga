import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import { useState } from "react";
import { login } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 50%;
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
  margin: 10px 0px;
  height: 40px;
  border-color: light gray;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-colour: black;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled {
    background-color: red;
    cursor: not-allowed;
  }
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Error = styled.span`
  color: red;
`;

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <div>
      <Container>
        <Navbar />
        <Header />
        <Wrapper>
          <Title>Sign In</Title>
          <Form>
            <Input
              placeholder="username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button onClick={handleClick} disabled={isFetching}>
              Login
            </Button>
            {error && (
              <Error>
                An error has occured. You need to enter a username and password
              </Error>
            )}
            <Link>Forgot Password</Link>
            <Link>Create an Account</Link>
          </Form>
        </Wrapper>
        <Footer />
      </Container>
    </div>
  );
};

export default LoginPage;
