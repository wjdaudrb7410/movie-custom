import { FaCalendarAlt, FaHeart, FaStar } from "react-icons/fa";
import styled from "styled-components";
import { colors, icon_size } from "./GlobalStyle";
import { IMG_URL_500, No_URL } from "../data/url";

const Jacket = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  border-radius: 10px;
  width: 100%;
  height: 400px;
  overflow: hidden;
  background: url(${IMG_URL_500}${(props) => props.$bgUrl}) no-repeat
    center/cover;
  @media screen and (max-width: 900px) {
    height: 300px;
  }
  @media screen and (max-width: 500px) {
    height: 200px;
  }
`;
const Cover = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 30%;
  background-color: transparent;
  backdrop-filter: blur(10px);
  div {
    color: ${colors.white};
    margin-bottom: -10px;
  }
`;
const Info = styled.div`
  font-weight: 300;
  font-size: 12px;
  margin: -20px 10px;
`;
const InfoCover = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const Titles = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: ${colors.white};
  @media screen and (max-width: 900px) {
    font-size: 12px;
  }
`;
export const Jackets = ({ Data }) => {
  return (
    <>
      <Jacket $bgUrl={Data?.poster_path}>
        <Cover>
          <Titles>{Data?.title}</Titles>
          <InfoCover>
            <Info>
              <FaStar size={icon_size.normal} /> :{" "}
              {Math.round(Data?.vote_average)}
            </Info>
            <Info>
              <FaCalendarAlt size={icon_size.normal} /> : {Data?.release_date}
            </Info>
            <Info>
              <FaHeart size={icon_size.normal} /> : {Data?.vote_count}
            </Info>
          </InfoCover>
        </Cover>
      </Jacket>
    </>
  );
};
