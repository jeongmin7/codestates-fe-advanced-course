import React from "react";
import codeStates from "../assets/codeStates.png";
import styled from "styled-components";
import { Link } from "react-router-dom";

const LogoContainer = styled.div`
  background-color: #4900cc;
`;
const Logo = styled.img`
  width: 200px;
  padding: 5px;
`;

const LogoTab = () => {
  return (
    <div>
      <LogoContainer>
        <Link to="/list">
          <Logo src={codeStates} alt="코드스테이츠 로고" />{" "}
        </Link>
      </LogoContainer>
    </div>
  );
};

export default LogoTab;
