import { useInterval } from "../../function/useInterval";
import { IMG_URL_ } from "../../data/url";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
const Bg = styled.div`
  width: 100%;
  overflow: hidden;
`;

const MovieTitle = styled.div`
  margin-left: 30px;
  position: absolute;
  bottom: 26.5%;
  font-size: 48px;
  font-weight: 700;
  color: white;
  z-index: 1;
  @media screen and (max-width: 1200px) {
    font-size: 28px;
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
      <Swiper {...Params} modules={[Autoplay]}>
        {Data.results.map((Data) => (
          <SwiperSlide key={Data.id}>
            <img src={`${IMG_URL_}${Data.backdrop_path}`}></img>
            <MovieTitle>{Data.title}</MovieTitle>
            <Link to={`/detail/${Data.id}`}>
              <Button Text="Goto Detail" Bbot="15%" />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Bg>
  );
};
