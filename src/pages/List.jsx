import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Pagination from "../components/Pagination";
import Loading from "./Loading";
import Search from "../components/Search";
import Post from "./Post";
import {
  ListContainer,
  Error,
  BigContainer,
  ListTitle,
  ListContent,
  ListRow,
  NumAndTitle,
  Title,
} from "../style/tabStyle";

const List = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const [post, setPost] = useState(false);
  const [selected, setSelected] = useState([]);
  const openModal = (key) => {
    setSelected(filteredItem.filter((_, index) => index + 1 === key));
    setPost(!post);
  };
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;
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
                    <div onClick={() => openModal(el.id)}>
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
              <Post
                selected={selected[0]?.id}
                openModal={openModal}
                userName={selected[0]?.userId}
              />
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
