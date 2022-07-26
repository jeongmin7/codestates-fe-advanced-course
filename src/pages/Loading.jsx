import React from "react";
import Logo from "../assets/loading.gif";
import styled from "styled-components";
const LoadingGif = styled.img`
  width: 300px;
  height: 300px;
  margin: auto;
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  width: 100%;
`;
const Loading = () => {
  return (
    <Container>
      <LoadingGif src={Logo} alt="loading..." />
    </Container>
  );
};

export default Loading;
