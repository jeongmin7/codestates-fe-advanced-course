import React from "react";
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
  margin-top: 5rem;
`;

const ListTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 1.1rem;
  font-weight: 700;
  border: 1px solid #555;
  padding: 1rem;
  border-radius: 10px;
`;
const ListRow = styled.div`
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
const NumAndTitle = styled.div`
  display: flex;
  flex-direction: row;
`;

const Title = styled.div`
  margin-left: 40px;
`;

const BigContainer = styled.div`
  border: 1px solid ${(props) => props.theme.textColor};
  width: 90%;
  margin: auto;
  border-radius: 10px;
  position: relative;
  background-color: ${(props) => props.theme.ModalColor};
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
