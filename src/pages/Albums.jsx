import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import Pagination from "../components/Pagination";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import {
  ListContainer,
  Error,
  BigContainer,
  ListTitle,
  ListRow,
  NumAndTitle,
  Title,
} from "../style/tabStyle";
import styled from "styled-components";

const AlbumLink = styled(Link)`
  color: ${(props) => props.theme.textColor};
  text-decoration: none;
`;

const Albums = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(10);
  const offset = (currentPage - 1) * postsPerPage;

  const [errorMsg, setErrorMsg] = useState("");
  const handleErrorMsg = (el) => {
    setErrorMsg(el);
  };

  const [filteredItem, setFilteredItem] = useState([]);
  const handleFilteredData = (data) => {
    setFilteredItem(data);
  };

  const getAlbums = () => {
    setLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/albums", {})
      .then((res) => setData(res.data))
      .then(() => setLoading(false))
      .catch(() => alert("앨범을 가져올 수  없습니다."));
  };
  useEffect(getAlbums, []);
  return (
    <div>
      {loading === false ? (
        <BigContainer>
          <ListContainer>
            <Search
              data={data}
              handleFilteredData={handleFilteredData}
              handleErrorMsg={handleErrorMsg}
            />
            <ListTitle>
              <div>No.</div>
              <div>Album</div>
              <div>Writer</div>
            </ListTitle>
            {filteredItem.length === 0 ? (
              <Error>{errorMsg}</Error>
            ) : (
              filteredItem
                .slice(offset, offset + postsPerPage)
                .map((el, key) => (
                  <AlbumLink to={`/albums/${el.id}`} key={key}>
                    <ListRow>
                      <NumAndTitle>
                        <div>{el.id}</div>
                        <Title>{el.title}</Title>
                      </NumAndTitle>
                      <div>{el.userId}</div>
                    </ListRow>
                  </AlbumLink>
                ))
            )}
            {
              <Pagination
                total={filteredItem.length}
                postsPerPage={postsPerPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            }
          </ListContainer>
        </BigContainer>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Albums;
