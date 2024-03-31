import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { IMG_URL_500 } from "../data/url";
import styled from "styled-components";

const MovieJacket = styled.div`
  height: 300px;
  background: url(${IMG_URL_500}${(props) => props.$bgUrl}) no-repeat
    center/cover;
`;
const params = {
  slidesPerView: 5.2,
  spaceBetween: 20,
  breakpoints: {
    1024: {
      slidesPerView: 5.2,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 4.2,
      spaceBetween: 15,
    },
    320: {
      slidesPerView: 3.2,
      spaceBetween: 10,
    },
  },
};

export const MovieEle = ({ movieData }) => {
  return (
    <>
      <Swiper {...params}>
        {movieData.map((rsl) => (
          <SwiperSlide key={rsl.id}>
            <Link to={`/detail/${rsl.id}`}>
              <MovieJacket $bgUrl={rsl.poster_path}></MovieJacket>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
