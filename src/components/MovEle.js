import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { IMG_URL_500 } from "../data/url";
import styled from "styled-components";
import { useEffect, useState } from "react";

const MovieJacket = styled.div`
  width: 150px;
  height: 250px;
  background: url(${IMG_URL_500}${(props) => props.$bgUrl}) no-repeat
    center/cover;
`;
const params = {
  slidesPerView: 3,
  centeredSlides: true,
  slidesPerView: 150,
  loop: "true",
  breakpoints: {
    1024: {
      slidesPerView: 3,
    },
    640: {
      slidesPerView: 2,
    },
    320: {
      slidesPerView: 2,
    },
  },
};

export const MovieEle = ({ movieData, initSilde = 2 }) => {
  return (
    <>
      <Swiper {...params} initialSlide={initSilde} grid={{ rows: 2 }}>
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
