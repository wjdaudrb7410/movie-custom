import { useEffect } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { IMG_URL_500 } from "../data/url";
import { Link } from "react-router-dom";
import { FaStar, FaCalendarAlt } from "react-icons/fa";
const Poster_col = {
  Main: "#000066",
};
const ConWrap = styled.div`
  width: 100vw;
`;
const TextLine = styled.div`
  font-size: 40px;
`;
const Jacket = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  border-radius: 10px;
  width: 150px;
  height: 200px;
  overflow: hidden;
  background: url(${IMG_URL_500}${(props) => props.$bgUrl}) no-repeat
    center/cover;
`;
const Cover = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  width: 100%;
  height: 50%;
  background-color: transparent;
  backdrop-filter: blur(10px);
  div {
    color: ${Poster_col.Main};
    margin-bottom: 2px;
  }
`;
const Titles = styled.div`
  font-weight: 900;
  color: ${Poster_col.Main};
  align-self: center;
  position: absolute;
  bottom: 40%;
  z-index: 20;
`;
const Shuffle = (array) => {
  array.sort(() => Math.random() - 0.5);
};
export const Movies = ({ Data, Texts }) => {
  const MovData = Data;
  useEffect(() => {
    Shuffle(MovData);
  }, []);
  return (
    <ConWrap>
      <TextLine>{Texts}</TextLine>
      <Swiper loop="true">
        {Data.map((rsl) => (
          <SwiperSlide key={rsl.id}>
            <Link to={`/detail/${rsl.id}`}>
              <Jacket $bgUrl={rsl.poster_path}>
                <Titles>{rsl.title}</Titles>
                <Cover>
                  <div>
                    <FaStar />:{Math.round(rsl.vote_average)}
                  </div>
                  <div>
                    <FaCalendarAlt />
                    {rsl.release_date}
                  </div>
                </Cover>
              </Jacket>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </ConWrap>
  );
};
