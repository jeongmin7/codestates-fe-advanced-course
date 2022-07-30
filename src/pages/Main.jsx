import React, { useState } from "react";
import Albums from "./Albums";
import List from "./List";
import LogoTab from "../components/LogoTab";
import styled from "styled-components";
import Darkmode from "../components/DarkMode";

const TabMenu = styled.div`
  width: 90%;
  display: flex;
  margin: auto;
  margin-top: 2rem;
  font-size: 1.3rem;
  font-weight: 700;
  .menu {
    padding: 1.3rem 1rem;
    cursor: pointer;
    background-color: ${(props) => props.theme.tabColor};
  }
  .activated {
    background-color: #4900cc;
    color: rgba(255, 255, 255, 1);
    transition: 0.5s;
    transform: scale(1.05);
  }
`;
const Menu = styled.div`
  border-top: 1px solid ${(props) => props.theme.textColor};
  border-left: 1px solid ${(props) => props.theme.textColor};
  border-right: 1px solid ${(props) => props.theme.textColor};
  border-radius: 6px;
`;
const TogglePosition = styled.div`
  display: inline;
  position: absolute;
  top: 5rem;
  right: 2rem;
  justify-content: end;
  margin-right: 2rem;
  margin-top: 1rem;
`;
const Container = styled.div`
  position: relative;
`;
const Main = ({ isDarkMode, handleDarkMode }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const selectTabHandler = (index) => {
    setActiveIndex(index);
  };

  const tabContent = [
    {
      tabTitle: "POST",
      tabCont: <List />,
    },
    {
      tabTitle: "ALBUM",
      tabCont: <Albums />,
    },
  ];

  return (
    <Container>
      <LogoTab />
      <TogglePosition>
        <Darkmode isDarkMode={isDarkMode} handleDarkMode={handleDarkMode} />
      </TogglePosition>
      <TabMenu>
        {tabContent.map((el, idx) => (
          <Menu
            key={idx}
            className={activeIndex === idx ? "menu activated" : "menu"}
            onClick={() => {
              selectTabHandler(idx);
            }}
          >
            {el.tabTitle}
          </Menu>
        ))}
      </TabMenu>
      <div>{tabContent[activeIndex].tabCont}</div>
    </Container>
  );
};
export default Main;
