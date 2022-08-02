import React, { useState, useEffect } from "react";
import Albums from "./Albums";
import List from "./List";
import LogoTab from "../components/LogoTab";
import styled from "styled-components";
import Darkmode from "../components/DarkMode";
import TabMenu from "../components/TabMenu";

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
  const [activeIndex, setActiveIndex] = useState(Number);

  const selectTabHandler = (index) => {
    setActiveIndex(index);
    localStorage.setItem("idx", JSON.stringify(index));
  };

  const idx = Number(localStorage.getItem("idx"));
  useEffect(() => {
    setActiveIndex(idx);
  }, [activeIndex]);

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
      <TabMenu />
    </Container>
  );
};
export default Main;
