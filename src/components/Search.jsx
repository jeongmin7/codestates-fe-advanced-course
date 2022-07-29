import React, { useState, useEffect } from "react";
import styled from "styled-components";

const SearchContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: baseline;
`;

const SearchInput = styled.input`
  width: 12rem;
  height: 1.5rem;
  border-radius: 5px;
`;
const SearchTitle = styled.div`
  font-size: 1rem;
`;

const Search = ({ data, handleFilteredData, handleErrorMsg }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInput = (e) => {
    setSearchTerm(e.target.value);
  };
  let filteredData = data.filter((el) => {
    // FIXME: error!
    if (el.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return el;
    } else if (!el.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return handleErrorMsg("Nothing found!");
      // FIXME: 여기서 오류
    }
  });

  useEffect(() => handleFilteredData(filteredData), [searchTerm]);
  return (
    <SearchContainer>
      <SearchTitle>SEARCH:</SearchTitle>
      <SearchInput
        type="text"
        placeholder="Enter title to be searched"
        onChange={handleInput}
      />
    </SearchContainer>
  );
};

export default Search;
//자식  let filteredData = data.filter((el) => {
// if (el.title.toLowerCase().includes(searchTerm.toLowerCase())) {
//   return el;
// }
