import styled from "styled-components";
import { IMG_URL_ } from "../../data/url";

const ConWrap = styled.div`
  padding: 150px;
  display: black;
  h2 {
    font-size: 50px;
  }
  div {
    font-size: 40px;
  }
`;
const Desc = styled.div``;
const Poster = styled.div``;
export const Content = ({ Data }) => {
  return (
    <ConWrap>
      <Poster>
        <img src={`${IMG_URL_}${Data?.poster_path}`} alt={Data?.title}></img>
      </Poster>
      <Desc>
        <h2>{Data.title}</h2>
        <div>상영시간: {Data.runtime} 분</div>
        <div>장르:</div>
        {Data.genres.map((gen) => (
          <div key={gen.id}>{gen.name}</div>
        ))}
        <div>평점 : {Math.round(Data.vote_average)}점</div>
        <div>줄거리:{Data.overview.slice(0, 80)}...</div>
      </Desc>
    </ConWrap>
  );
};
