import { useInterval } from "../../function/useInterval";
import { IMG_URL_ } from "../../data/url";
import styled from "styled-components";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const Bg = styled.section`
  width: 100vw;
  height: 700px;
  vertical-align: bottom;
  @media screen and (max-width: 640px) {
    height: 280px;
  }
  @media screen and (max-width: 450px) {
    height: 160px;
  }
`;

const MovieTitle = styled.div`
  padding-bottom: 40px;
  font-size: 40px;
  font-weight: 700;
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
  };
  return (
    <Bg>
      <Swiper {...Params} modules={[Autoplay, Pagination, Navigation]}>
        {Data.results.map((Data) => (
          <SwiperSlide key={Data.id}>
            <img src={`${IMG_URL_}${Data.backdrop_path}`}></img>
          </SwiperSlide>
        ))}
      </Swiper>
    </Bg>
  );
};
