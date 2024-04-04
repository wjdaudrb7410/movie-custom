import { useEffect } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { IMG_URL_500 } from "../data/url";
import { Link } from "react-router-dom";
import { FaStar, FaCalendarAlt } from "react-icons/fa";
import { Jackets } from "./Jackets";

const Params = {
  slidesPerView: 6,
  spaceBetween: 10,
  breakpoints: {
    640: {
      slidesPerView: 4,
    },
    400: {
      slidesPerView: 3,
    },
  },
  loop: "true",
};
const Poster_col = {
  Main: "red",
};
const ConWrap = styled.div`
  margin: 10px 0px 0px 60px;
  width: 100vw;
`;
const JackWrap = styled.div`
  overflow: hidden;
  margin: 20px 0;
  margin-left: 25px;
`;
const TextLine = styled.div`
  font-weight: 500;
  font-size: 40px;
  @media screen and (max-width: 900px) {
    font-size: 22px;
  }
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
                <Jackets Data={rsl}></Jackets>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </JackWrap>
    </ConWrap>
  );
};

{
  /* <Jacket $bgUrl={rsl.poster_path}>
                  <Titles>{rsl.title}</Titles>
                  <Cover>
                    <Info>
                      <FaStar />:{Math.round(rsl.vote_average)}
                    </Info>
                    <Info>
                      <FaCalendarAlt />:{rsl.release_date}
                    </Info>
                  </Cover>
                </Jacket> */
}
