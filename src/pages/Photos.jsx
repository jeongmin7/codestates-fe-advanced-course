import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import LogoTab from "../components/LogoTab";
import Loading from "./Loading";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  place-items: center;
`;
const ColorContainer = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 50% 50%;
  margin-top: 100px;
  gap: 16px;
`;
const PhotoAndTitle = styled.div`
  display: flex;
  flex-direction: column;
`;

const Photos = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(10);
  const offset = (currentPage - 1) * postsPerPage;

  const params = useParams();
  const getPhotos = () => {
    setLoading(true);
    axios
      .get(`https://jsonplaceholder.typicode.com/photos?albumId=${params.id}`)
      .then((res) => setData(res.data))
      .then(() => setLoading(false))
      .catch(() => alert("사진을 가져올 수 없습니다. "));
  };
  useEffect(getPhotos, []);

  return (
    <div>
      <LogoTab />
      {loading ? (
        <Loading />
      ) : (
        <Container>
          <ColorContainer>
            {data &&
              data.slice(offset, offset + postsPerPage).map((el, idx) => (
                <PhotoAndTitle key={idx}>
                  <img src={el.thumbnailUrl} alt="thumbnail" />
                  {el.title}
                </PhotoAndTitle>
              ))}
          </ColorContainer>
        </Container>
      )}
    </div>
  );
};

export default Photos;
