import React, { useState } from "react";
import Albums from "../pages/Albums";
import List from "../pages/List";
import LogoTab from "./LogoTab";
import styled from "styled-components";
import Darkmode from "./DarkMode";

const TabMenu = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 4rem;
  margin-left: 4rem;
  font-size: 2rem;
  font-weight: 700;
  .menu {
    width: 20%;
    padding: 20px 10px;
    cursor: pointer;
  }
  .activated {
    background-color: #4900cc;
    color: rgba(255, 255, 255, 1);
    transition: 0.5s;
  }
`;
const Menu = styled.div`
  border: 1px solid ${(props) => props.theme.textColor};
  border-radius: 6px;
`;
const TogglePosition = styled.div`
  display: flex;
  justify-content: end;
  margin-right: 2rem;
  margin-top: 2rem;
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
    <div>
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
    </div>
  );
};
export default Main;
