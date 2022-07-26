import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import LogoTab from "../components/LogoTab";
import styled from "styled-components";
import Loading from "./Loading";

const ListContainer = styled.div`
  width: 70%;
  margin: auto;
  margin-top: 50px;
  border-top: 1px solid #333;
  border-bottom: 1px solid #333;
  padding-top: 10px;
`;

const ListTitle = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 20px;
  justify-content: space-between;
  font-size: 16px;
  border-bottom: 1px solid #555;
  padding-bottom: 10px;
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
            <div> No.</div>
            <div>Title</div>
            <div>Writer</div>
          </ListTitle>
          {data &&
            data.slice().map((el) => (
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
    </div>
  );
};

export default List;
