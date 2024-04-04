import styled from "styled-components";
import { IMG_URL_ } from "../../data/url";

const ConWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 120px;
  align-items: center;
`;
const Desc = styled.div`
  width: 500px;
  text-align: center;
  z-index: 2;

  h2 {
    font-size: 50px;
  }
  div {
    font-size: 40px;
  }
`;
const Poster = styled.div`
  width: 400px;
  height: 600px;
  background: url(${IMG_URL_}${(props) => props.$bgUrl}) no-repeat center/cover;
`;
export const Content = ({ Data }) => {
  return (
    <ConWrap>
      <Poster $bgUrl={Data?.poster_path}></Poster>
      <Desc>
        <h2>{Data.title}</h2>
        <div>
          상영시간: {Math.floor(Data.runtime / 60)}시간{Data.runtime % 60}분{" "}
        </div>
        <div>장르:</div>
        {Data.genres.map((gen) => (
          <div key={gen.id}>{gen.name}</div>
        ))}
        <div>평점 : {Math.round(Data.vote_average)}점</div>
        <div>줄거리:{Data.overview.slice(0, 60)}...</div>
      </Desc>
    </ConWrap>
  );
};
{
  /*  */
}
