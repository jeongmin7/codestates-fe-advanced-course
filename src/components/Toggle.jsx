import React from "react";
import styled from "styled-components";

const ToggleContainer = styled.div`
  position: relative;
  cursor: pointer;
  > .toggle-container {
    width: 50px;
    height: 24px;
    border-radius: 30px;
    background-color: #8b8b8b;
    // TODO : .toggle--checked 클래스가 활성화 되었을 경우의 CSS를 구현합니다.
  }

  > .toggle-circle {
    position: absolute;
    top: 1px;
    left: 1px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: #ffffff;
    // TODO : .toggle--checked 클래스가 활성화 되었을 경우의 CSS를 구현합니다.
  }
`;
const Toggle = () => {
  return (
    <div>
      <ToggleContainer />
    </div>
  );
};

export default Toggle;
