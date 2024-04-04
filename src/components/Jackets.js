import { FaCalendarAlt, FaStar } from "react-icons/fa";
import styled from "styled-components";
import { colors } from "./GlobalStyle";
import { IMG_URL_500 } from "../data/url";

const Jacket = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  border-radius: 10px;
  width: 100%;
  height: 300px;
  overflow: hidden;
  background: url(${IMG_URL_500}${(props) => props.$bgUrl}) no-repeat
    center/cover;
  @media screen and (max-width: 900px) {
    height: 200px;
  }
  @media screen and (max-width: 500px) {
    height: 200px;
  }
`;
const Cover = styled.div`
  display: flex;
  line-height: 1cm;
  align-items: flex-end;
  justify-content: space-around;
  width: 100%;
  height: 50%;
  background-color: transparent;
  backdrop-filter: blur(10px);
  div {
    color: ${colors.point};
    margin-bottom: 2px;
  }
`;
const Info = styled.div`
  font-weight: bold;
  font-size: 20px;
  @media screen and (max-width: 900px) {
    font-size: 14px;
  }
`;
const Titles = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: ${colors.point};
  position: relative;
  bottom: -15%;
  z-index: 2;
  @media screen and (max-width: 900px) {
    font-size: 14px;
  }
`;
export const Jackets = ({ Data }) => {
  return (
    <Jacket $bgUrl={Data.poster_path}>
      <Titles>{Data.title}</Titles>
      <Cover>
        <Info>
          <FaStar />:{Math.round(Data.vote_average)}
        </Info>
        <Info>
          <FaCalendarAlt />:{Data.release_date}
        </Info>
      </Cover>
    </Jacket>
  );
};
