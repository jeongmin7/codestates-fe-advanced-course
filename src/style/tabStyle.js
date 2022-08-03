import styled from "styled-components";

export const ListContainer = styled.div`
  width: 70%;
  margin: auto;
  margin-top: 5rem;
`;

export const ListTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 1.1rem;
  font-weight: 700;
  border: 1px solid #555;
  padding: 1rem;
  border-radius: 10px;
`;
export const ListRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem;
  font-size: 1rem;
  border: 1px solid #333;
  padding: 1rem;
  border-radius: 10px;
  transition: 0.5s;
  border: 1px solid ${(props) => props.theme.textColor};
  &:hover {
    cursor: pointer;
    transform: scale(1.12);
  }
`;
export const NumAndTitle = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Title = styled.div`
  margin-left: 40px;
`;

export const BigContainer = styled.div`
  border: 1px solid ${(props) => props.theme.textColor};
  width: 90%;
  margin: auto;
  border-radius: 10px;
  position: relative;
  background-color: ${(props) => props.theme.ModalColor};
`;
export const ListContent = styled.div`
  &:hover {
    cursor: pointer;
  }
`;
export const Error = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  font-size: 1.5rem;
`;
