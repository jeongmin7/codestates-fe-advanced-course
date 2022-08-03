import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchContainer = styled.div`
  display: flex;
  width: 15rem;
  padding: 0.5rem;
  align-items: center;
  border: 1px solid ${(props) => props.theme.textColor};
  border-radius: 5px;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  align-items: baseline;
`;
const SearchInput = styled.input`
  width: 12rem;
  height: 1.5rem;
  border: none;
  background-color: ${(props) => props.theme.ModalColor};
  color: ${(props) => props.theme.textColor};
`;

const Clear = styled.div`
  font-size: 1.5rem;
  padding-left: 0.5rem;
`;
const Num = styled.span`
  font-weight: 600;
`;

const Search = ({ data, handleFilteredData, handleErrorMsg }) => {
  const nameInput = useRef();
  const [searchTerm, setSearchTerm] = useState("");

  const handleInput = (e) => {
    setSearchTerm(e.target.value);
  };
  let filteredData = data.filter((el) => {
    if (el.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return el;
    } else if (!el.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return handleErrorMsg("일치하는 항목이 없습니다.");
    }
    return el;
  });

  const clearInput = () => {
    setSearchTerm("");
    nameInput.current.focus();
  };

  useEffect(() => handleFilteredData(filteredData), [searchTerm]);
  return (
    <Container>
      <span>
        총 <Num>{filteredData.length}</Num>
        개의 글이 있습니다.
      </span>
      <SearchContainer>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <SearchInput
          type="text"
          placeholder="검색어를 입력해주세요"
          onChange={handleInput}
          value={searchTerm}
          ref={nameInput}
        />
        <Clear>
          <FontAwesomeIcon icon={faTimes} onClick={clearInput} />
        </Clear>
      </SearchContainer>
    </Container>
  );
};

export default Search;
