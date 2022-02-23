import styled from "styled-components";
import React from "react";

function Announcement() {
  return <Container>Lorem ipsum is simply dummy text of printing</Container>;
}

export default Announcement;

const Container = styled.div`
  height: 30px;
  background-color: #3772ff;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;
