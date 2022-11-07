import {
  Facebook,
  Instagram,
  LocationOnOutlined,
  Telegram,
  YouTube,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #2c041c;
  color: white;
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

//nothing to style
const Logo = styled.h3``;

const Description = styled.p`
  margin: 20px 0px;
`;
const SocialMediaIcons = styled.h6`
  display: flex;
  color: black;
  color: white;
`;
const SocialIcon = styled.h1`
  width: 45px;
  height: 45px;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`;

const Centre = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

// list auto generates margin & padding therefore setting them to zero
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

//nothing to style in list items
const ListItems = styled.li``;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

// const TikTokIcon = ({ color = "#000000" }) => {
//   return (
//     <svg
//       fill={color}
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 50 50"
//       width="100%"
//       height="100%"
//     >
//       <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z" />
//     </svg>
//   );
// };

const Footer = () => {
  return (
    <div>
      <Container>
        <Left>
          <Title> CUSTOMER SERVICE </Title>
          <List>
            <ListItems>Track My Order</ListItems>
            <ListItems>FAQs</ListItems>
            <ListItems>Shipping Info</ListItems>
            <ListItems>Return Policy</ListItems>
            <ListItems>Size Guide</ListItems>
            <ListItems>Reviews</ListItems>
            <ListItems>Contact Us</ListItems>
          </List>
        </Left>
        <Centre>
          <Title>ABOUT US</Title>
          <List>
            <ListItems>About Us</ListItems>
            <ListItems>Press & Media</ListItems>
            <ListItems>Privacy Policy</ListItems>
            <ListItems>Terms of Service</ListItems>
            <ListItems>Careers</ListItems>
          </List>
        </Centre>
        <Right>
          <Logo>
            <LocationOnOutlined style={{ marginRight: "5px" }} />
            VISIT OUR STORE
          </Logo>
          <Description>
            79 Anson Road <br />
            #20-01 <br />
            Singapore 068809 <br />
          </Description>
          <SocialMediaIcons>
            <SocialIcon>
              <Facebook />
            </SocialIcon>
            <SocialIcon>
              <Instagram />
            </SocialIcon>
            <SocialIcon>
              <Telegram />
            </SocialIcon>
            <SocialIcon>
              <YouTube />
            </SocialIcon>
          </SocialMediaIcons>
        </Right>
      </Container>
    </div>
  );
};

export default Footer;
