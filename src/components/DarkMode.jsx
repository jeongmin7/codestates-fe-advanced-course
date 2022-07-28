import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-regular-svg-icons";
const ToggleBtn = styled.button`
  width: 4rem;
  height: 2rem;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  background-color: ${(props) => (!props.toggle ? "#b39bde" : "#4900cc")};
  position: relative;
  display: flex;
  padding: 0;
  justify-content: space-around;
  align-items: center;
  transition: all 0.5s ease-in-out;
`;
const Circle = styled.div`
  background-color: #4900cc;
  width: 2rem;
  height: 2rem;
  border-radius: 2rem;
  position: absolute;
  left: 5%;
  transition: all 0.5s ease-in-out;
  ${(props) =>
    props.toggle &&
    `background-color:#b39bde;
      transform: translate(2rem, 0);
      transition: all 0.5s ease-in-out;
    `}
`;
const Icon = styled.div`
  padding: 0.5rem;
  color: ${(props) => props.theme.textColor};
`;
const DarkMode = ({ isDarkMode, handleDarkMode }) => {
  const [toggle, setToggle] = useState(false);
  const toggleHandler = () => {
    setToggle(!toggle);
    handleDarkMode(isDarkMode);
  };
  return (
    <div>
      <ToggleBtn onClick={toggleHandler} toggle={toggle}>
        <Icon>
          <FontAwesomeIcon icon={faSun} />
        </Icon>
        <Icon>
          <FontAwesomeIcon icon={faMoon} />
        </Icon>
        <Circle toggle={toggle} />
        <br />
      </ToggleBtn>
    </div>
  );
};

export default DarkMode;
