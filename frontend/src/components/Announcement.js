import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: hotpink;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
`;

const Announcement = () => {
  return (
    <div>
      <Container>New Here? Enjoy 10% off no min. spend. Sign up now</Container>
    </div>
  );
};

export default Announcement;
