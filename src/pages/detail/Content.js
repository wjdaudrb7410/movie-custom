import styled from "styled-components";
import { IMG_URL_ } from "../../data/url";
import { FaCalendar, FaPlay, FaStar } from "react-icons/fa";
import { colors } from "../../components/GlobalStyle";
import { VscVmRunning } from "react-icons/vsc";
import YouTube from "react-youtube";
const ConWrap = styled.div`
  display: flex;
  flex-direction: row;
  padding: 120px 120px;
  align-items: flex-start;
  justify-content: center;
  @media screen and (max-width: 800px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;
const Desc = styled.div`
  margin-top: 12px;
  font-size: 24px;
`;
const Poster = styled.div`
  width: 800px;
  height: 600px;
  background: url(${IMG_URL_}${(props) => props.$bgUrl}) no-repeat center/cover;
  @media screen and (max-width: 800px) {
    width: 400px;
  }
`;
const DescWrap = styled.div`
  display: flex;
  height: 600px;
  margin-right: 20px;
  flex-direction: column;
  align-items: flex-start;
  @media screen and (max-width: 800px) {
    align-items: center;
    text-align: center;
  }
`;
const Title = styled.div`
  margin-bottom: 15px;
  font-size: 30px;
  font-weight: 700;
`;
const ComWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  div {
    font-size: 18px;
  }
`;
const MoreInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  border-radius: 10px;
  width: 100%;
  border: 2px solid black;
  background-color: #e2e2e2;
  svg {
    color: ${colors.point};
  }
`;
const MoreProp = styled.div`
  margin: 10px 20px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  div {
    font-weight: 300;
  }
`;
export const Content = ({ Data, Vids }) => {
  return (
    <ConWrap>
      <DescWrap>
        <Title>{Data.title}</Title>
        <Desc>
          상영시간: {Math.floor(Data.runtime / 60)}시간{Data.runtime % 60}분
        </Desc>
        <ComWrap>
          <Desc>제작사:</Desc>
          {Data.production_companies.map((rsl) => (
            <Desc key={rsl.id}>{rsl.name}/</Desc>
          ))}
        </ComWrap>
        <Desc>{Data.overview.slice(0, 60)}...</Desc>
        {Vids ? (
          <YouTube
            videoId={Vids}
            opts={{
              width: "100%",
              height: "300px",
            }}
            onReady={(e) => {
              e.target.mute();
            }}
            onEnd={(e) => {
              e.target.stopVideo(0);
            }}
            style={{ marginTop: "20px" }}
          />
        ) : (
          <div>비디오 없음</div>
        )}
        <MoreInfo>
          <MoreProp>
            <FaStar size={40} />
            <FaCalendar size={40} />
            <VscVmRunning size={40} />
          </MoreProp>

          <MoreProp>
            <Desc>{Math.round(Data.vote_average)}점</Desc>
            <Desc>{Data.release_date.replace(/-/g, ".")}</Desc>
            <Desc>{Data.runtime}m</Desc>
          </MoreProp>
        </MoreInfo>
      </DescWrap>
      <Poster $bgUrl={Data?.poster_path}></Poster>
    </ConWrap>
  );
};
