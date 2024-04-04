import { useInterval } from "../../function/useInterval";
import { IMG_URL_ } from "../../data/url";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Button } from "../../components/Button";
import { Link, useParams } from "react-router-dom";
const Bg = styled.div`
  text-align: left;
  position: relative;
  width: 100vw;
  overflow: hidden;
`;
const MovieTitle = styled.div`
  margin-bottom: 10px;
  font-size: 42px;
  font-family: "NotoSans-KR", sans-serif;
  font-display: initial;
  font-weight: 700;
  color: white;
  z-index: 3;
  @media screen and (max-width: 450px) {
    font-weight: 400;
    font-size: 8px;
  }
`;
const Grab = styled.div`
  align-items: flex-start;
  position: absolute;
  margin-left: 30px;
  bottom: 200px;
  display: flex;
  flex-direction: column;
  width: 420px;
  height: 40px;
  @media screen and (max-width: 500px) {
    bottom: 100px;
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
            <img
              src={`${IMG_URL_}${Data.backdrop_path}`}
              alt={Data.title}
            ></img>
            <Grab>
              <MovieTitle>{Data.title}</MovieTitle>
              <Button Text="Goto Detail" id={Data.id}></Button>
            </Grab>
          </SwiperSlide>
        ))}
      </Swiper>
    </Bg>
  );
};
