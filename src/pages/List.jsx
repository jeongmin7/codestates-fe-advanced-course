import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Pagination from "../components/Pagination";
import Loading from "./Loading";
import Search from "../components/Search";
import Post from "./Post";

const ListContainer = styled.div`
  width: 70%;
  margin: auto;
  margin-top: 50px;
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
  color: ${(props) => props.theme.linkColor};
`;
const Title = styled.div`
  margin-left: 40px;
`;

const BigContainer = styled.div`
  border: 2px solid ${(props) => props.theme.textColor};
  width: 90%;
  margin: 0;
  margin-left: 4rem;
  border-radius: 10px;
`;
const ListContent = styled.div`
  &:hover {
    cursor: pointer;
  }
`;
const Error = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  font-size: 1.5rem;
`;
const List = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const [post, setPost] = useState(false);
  const [selected, setSelected] = useState([]);
  const openModal = (key) => {
    setSelected(filteredItem.filter((_, index) => index === key));
    setPost(!post);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(10);
  const offset = (currentPage - 1) * postsPerPage;

  const [filteredItem, setFilteredItem] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  const handleFilteredData = (data) => {
    setFilteredItem(data);
  };

  const handleErrorMsg = (el) => {
    setErrorMsg(el);
  };

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
              <Title>Title</Title>
              <div>Writer</div>
            </ListTitle>

            {filteredItem.length === 0 ? (
              <Error>{errorMsg}</Error>
            ) : (
              filteredItem
                .slice(offset, offset + postsPerPage)
                .map((el, key) => (
                  <ListContent key={el.id}>
                    <div onClick={() => openModal(key)}>
                      <div>
                        <ListRow>
                          <NumAndTitle>
                            {el.id}
                            <Title>{el.title}</Title>
                          </NumAndTitle>
                          <div>{el.userId}</div>
                        </ListRow>
                      </div>
                    </div>
                  </ListContent>
                ))
            )}
            {post ? (
              <Post selected={selected[0]?.id} openModal={openModal} sel />
            ) : (
              ""
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

export default List;
