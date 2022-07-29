import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import Pagination from "../components/Pagination";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Search from "../components/Search";

const Container = styled.div`
  width: 70%;
  margin: auto;
  margin-top: 50px;
`;
const Expl = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 16px;
  border-bottom: 1px solid #555;
  padding-bottom: 10px;
  padding: 10px 20px 10px 30px;
`;
const AlbumDetail = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2rem;
  font-size: 1.2rem;
`;

const AlbumLink = styled(Link)`
  color: ${(props) => props.theme.textColor};
  text-decoration: none;
`;
const NumAndTitle = styled.div`
  display: flex;
  flex-direction: row;
`;
const AlbumTitle = styled.div`
  margin-left: 40px;
`;
const AlbumContainer = styled.div`
  border: 2px solid ${(props) => props.theme.textColor};
  width: 90%;
  margin: 0;
  margin-left: 4rem;
  border-radius: 10px;
`;
const Error = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  font-size: 1.5rem;
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
        <AlbumContainer>
          <Container>
            <Search
              data={data}
              handleFilteredData={handleFilteredData}
              handleErrorMsg={handleErrorMsg}
            />
            <Expl>
              <div>No.</div>
              <div>Album</div>
              <div>Writer</div>
            </Expl>
            {filteredItem.length === 0 ? (
              <Error>{errorMsg}</Error>
            ) : (
              filteredItem
                .slice(offset, offset + postsPerPage)
                .map((el, key) => (
                  <AlbumLink to={`/albums/${el.id}`} key={key}>
                    <AlbumDetail>
                      <NumAndTitle>
                        <div>{el.id}</div>
                        <AlbumTitle>{el.title}</AlbumTitle>
                      </NumAndTitle>
                      <div>{el.userId}</div>
                    </AlbumDetail>
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
          </Container>
        </AlbumContainer>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Albums;
