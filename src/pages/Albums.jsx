import axios from "axios";
import React, { useEffect, useState } from "react";
import LogoTab from "../components/LogoTab";
import Loading from "./Loading";
import Pagination from "../components/Pagination";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Title = styled.div`
  color: #333;
  font-size: 2rem;
  font-weight: 700;
  padding: 1rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 20px 0;
`;

const Container = styled.div`
  width: 70%;
  margin: auto;
  margin-top: 50px;
  border-top: 1px solid #333;
  border-bottom: 1px solid #333;
`;
const Expl = styled.div`
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #333;
`;
const AlbumDetail = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0.5rem;
  padding: 0.5rem;
  font-size: 1.2rem;
`;

const AlbumLink = styled(Link)`
  color: #333;
  text-decoration: none;
  display: flex;
  padding-top: 10px;
`;
const NumAndTitle = styled.div`
  display: flex;
  flex-direction: row;
`;
const AlbumTitle = styled.div`
  margin-left: 40px;
`;

const Albums = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(10);
  const offset = (currentPage - 1) * postsPerPage;
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
        <div>
          <Container>
            <Expl>
              <div>No.</div>
              <div>Album</div>
              <div>Writer</div>
            </Expl>
            {data &&
              data.slice(offset, offset + postsPerPage).map((el) => (
                <AlbumLink to={`/albums/${el.id}`}>
                  <AlbumDetail>
                    <NumAndTitle>
                      <div>{el.id}</div>
                      <AlbumTitle>{el.title}</AlbumTitle>
                    </NumAndTitle>
                    <div>{el.userId}</div>
                  </AlbumDetail>
                </AlbumLink>
              ))}
          </Container>
        </div>
      ) : (
        <Loading />
      )}
      {data && (
        <Pagination
          total={data.length}
          postsPerPage={postsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </div>
  );
};

export default Albums;
