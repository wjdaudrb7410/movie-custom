import { useInterval } from "../../function/useInterval";
import { IMG_URL_ } from "../../data/url";
import styled from "styled-components";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
const Bg = styled.div`
  width: 75%;
  overflow: hidden;
`;

const MovieTitle = styled.div`
  position: absolute;
  bottom: 5%;
  font-size: 40px;
  font-weight: 700;
  color: white;
  z-index: 1;
  @media screen and (max-width: 1200px) {
    font-size: 32px;
  }
  @media screen and (max-width: 1000px) {
    font-size: 24px;
  }
`;

export const MainBanner = ({ Data }) => {
  // const [index, SetIndex] = useState(0);
  // useInterval(() => {
  //   if (Data && index < Data.results.length - 1) {
  //     SetIndex(index + 1);
  //   } else {
  //     SetIndex(0);
  //   }
  // }, 5000);
  const Params = {
    spaceBetween: 50,
    slidesPerView: 1,
    effect: "fade",
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    loop: true,
  };
  return (
    <Bg>
      <Swiper {...Params}>
        {Data.results.map((Data) => (
          <SwiperSlide key={Data.id}>
            <img src={`${IMG_URL_}${Data.backdrop_path}`}></img>
            <MovieTitle>{Data.title}</MovieTitle>
          </SwiperSlide>
        ))}
      </Swiper>
    </Bg>
  );
};
