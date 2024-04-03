import { useEffect } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { IMG_URL_500 } from "../data/url";
import { Link } from "react-router-dom";
import { FaStar, FaCalendarAlt } from "react-icons/fa";
import { colors } from "./GlobalStyle";
const Params = {
  slidesPerView: 5,

  breakpoints: {
    1024: {
      slidesPerView: 5,
    },
    640: {
      slidesPerView: 3,
    },
    400: {
      slidesPerView: 3,
    },
  },
  loop: "true",
};
const Poster_col = {
  Main: "white",
};
const ConWrap = styled.div`
  margin: 10px 0;
  width: 100vw;
`;
const JackWrap = styled.div`
  margin: 20px 0;
`;
const TextLine = styled.div`
  font-weight: 500;
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
  padding: 0 10px;
  font-weight: 700;
  color: ${Poster_col.Main};
  position: relative;
  bottom: -17%;

  z-index: 2;
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
      <JackWrap>
        <Swiper {...Params}>
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
      </JackWrap>
    </ConWrap>
  );
};
