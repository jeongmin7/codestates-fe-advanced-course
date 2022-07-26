import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import LogoTab from "../components/LogoTab";
import styled from "styled-components";
import Pagination from "../components/Pagination";
import Loading from "./Loading";

const ListContainer = styled.div`
  width: 70%;
  margin: auto;
  margin-top: 50px;
  border-top: 1px solid #333;
  border-bottom: 1px solid #333;
`;

const ListTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 16px;
  border-bottom: 1px solid #555;
  padding-bottom: 10px;
  padding: 10px 20px 10px 30px;
`;
const ListRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 2rem;
  font-size: 1.2rem;
`;
const NumAndTitle = styled.div`
  display: flex;
  flex-direction: row;
`;
const LinkedId = styled(Link)`
  text-decoration: none;
  color: #333;
`;
const Title = styled.div`
  margin-left: 40px;
`;
const List = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(10);
  const offset = (currentPage - 1) * postsPerPage;

  const getPosts = () => {
    setLoading(true);

    axios
      .get("https://jsonplaceholder.typicode.com/posts", {})
      .then((res) => setData(res.data))
      .then(() => setLoading(false))
      .catch(() => alert("글 목록을 불러올 수 없습니다. "));
  };

  useEffect(getPosts, []);

  return (
    <div>
      <LogoTab />
      {loading === false ? (
        <ListContainer>
          <ListTitle>
            <div>No.</div>
            <Title>Title</Title>
            <div>Writer</div>
          </ListTitle>
          {data &&
            data.slice(offset, offset + postsPerPage).map((el) => (
              <LinkedId to={`/posts/${el.id}`}>
                <div>
                  <ListRow>
                    <NumAndTitle>
                      {el.id}
                      <Title>{el.title}</Title>
                    </NumAndTitle>
                    <div>{el.userId}</div>
                  </ListRow>
                </div>
              </LinkedId>
            ))}
        </ListContainer>
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

export default List;
