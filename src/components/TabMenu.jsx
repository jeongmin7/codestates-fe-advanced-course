import React, { useState, useEffect } from "react";
import Albums from "../pages/Albums";
import List from "../pages/List";
import styled from "styled-components";
const Tab = styled.div`
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
const TabMenu = () => {
  const [activeIndex, setActiveIndex] = useState(Number);

  const selectTabHandler = (index) => {
    setActiveIndex(index);
    localStorage.setItem("idx", JSON.stringify(index));
  };

  const idx = Number(localStorage.getItem("idx"));
  useEffect(() => {
    setActiveIndex(idx);
  }, [idx]);

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
      <Tab>
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
      </Tab>
      <div>{tabContent[activeIndex].tabCont}</div>
    </div>
  );
};

export default TabMenu;
