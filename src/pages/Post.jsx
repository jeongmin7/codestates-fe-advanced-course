import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Loading from "./Loading";
const ModalBack = styled.div`
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
`;
const Modal = styled.div`
  position: relative;
  min-width: 40%;
  width: 40%;
  min-height: 60%;
  padding: 2.5em;
  border-radius: 1em;
  background: ${(props) => props.theme.tabColor};
  display: flex;
  flex-direction: column;
`;
const Close = styled.div`
  display: inline-block;
  position: absolute;
  right: 30px;
  top: 20px;
  font-size: 35px;
  color: ${(props) => props.theme.textColor};
  &:hover {
    cursor: pointer;
  }
`;
const Content = styled.div`
  font-size: 1.4rem;
  padding-bottom: 0.5rem;
`;
const Title = styled.div`
  font-size: 2rem;
  width: 100%;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const Writer = styled.div`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  margin-right: 10%;
  text-align: end;
`;

const CommentContainer = styled.div`
  border-top: 1px solid #555;
`;
const CommentTitle = styled.div`
  margin: 10px 0;
  font-weight: 700;
`;
const Comments = styled.div`
  display: grid;
  grid-template-columns: 35% 60%;
  align-items: baseline;
  margin-bottom: 10px;
`;
const CommentWriter = styled.div`
  height: 100%;
`;
const CommentContent = styled.div`
  height: 100%;
  font-size: 1.2rem;
`;
const Post = ({ selected, openModal }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [comments, setComments] = useState([]);

  const [user, setUser] = useState([]);

  const getPost = () => {
    setLoading(true);
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${selected}`)
      .then((res) => setData(res.data))
      .then(() => setLoading(false));
  };
  useEffect(getPost, []);

  const getUserName = () => {
    setLoading(true);

    axios
      .get(`https://jsonplaceholder.typicode.com/users/${selected}`, {})
      .then((res) => setUser(res.data))
      .then(() => setLoading(false))
      .catch(() => alert("사용자 정보를 불러올 수 없습니다. "));
  };
  useEffect(getUserName, []);
  const getComments = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/post/${selected}/comments`)
      .then((res) => setComments(res.data))
      .catch(() => alert("댓글 목록을 불러올 수 없습니다. "));
  };

  useEffect(getComments, []);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <ModalBack>
          <Modal>
            <Close onClick={openModal}>
              <FontAwesomeIcon icon={faTimes} />
            </Close>
            <Content>
              <Title>{data.title}</Title>
              <Writer>{user.name}</Writer>
              <div>{data.body}</div>
            </Content>
            <CommentContainer>
              <CommentTitle>Comments({comments.length})</CommentTitle>
              {comments.map((el, key) => (
                <Comments key={key}>
                  <CommentWriter>{el.name}</CommentWriter>
                  <CommentContent>{el.body}</CommentContent>
                </Comments>
              ))}
            </CommentContainer>
          </Modal>
        </ModalBack>
      )}
    </div>
  );
};

export default Post;
