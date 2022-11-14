import React from "react";
import styled from "styled-components";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 100px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
`;

const SearchContainer = styled.div`
  // border: 1px solid lightgray;
  display: flex;
  align-items: centre;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const Centre = styled.div`
  flex: 3;
  text-align: center;
  font-weight: bold;
  font-size: 16px;
  letter-spacing: 3px;
`;

const Logo = styled.h1`
  font-weight: bold;
`;

const Right = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  // console.log(quantity);

  return (
    <div>
      <Container>
        <Wrapper>
          <Left>
            <Language>EN</Language>
            <SearchContainer>
              <Input />
              <Search style={{ color: "DimGray", fontSize: 20 }} />
            </SearchContainer>
          </Left>
          <Centre>
            <Logo>HELLO YOGA</Logo>
          </Centre>
          <Right>
            <MenuItem>REGISTER</MenuItem>
            <MenuItem>SIGN IN</MenuItem>
            <Link to="/cart">
              <MenuItem>
                <ShoppingCartOutlined />
                <Badge badgeContent={quantity} color="primary"></Badge>
              </MenuItem>
            </Link>
          </Right>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Navbar;
