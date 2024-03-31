import { useEffect, useState } from "react";

import styled from "styled-components";

import { IMG_URL_500 } from "../data/url";
import { MovieEle } from "./MovEle";
const TapWrap = styled.div`
  margin-top: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 1000px;
  padding: 0 7.5rem;
`;
const TapBox = styled.div`
  width: 440px;
  height: 700px;
  display: block;
`;
const TapButton = styled.button`
  width: 32%;
  border: none;
  padding: 10px 20px;
  background-color: ${(props) => (props.$isActive ? "#f0ece3" : "transparent")};
  color: ${(props) => (props.$isActive ? "black" : "grey")};
  cursor: pointer;
`;
const TapContent = styled.div`
  border-bottom: 1px solid #ccc;
  padding: 10px;
`;

const Params = {
  slidesPerView: 3,
  spaceBetween: 30,
  centeredSlides: true,
  breakpoints: {
    1024: {
      slidesPerView: 5.2,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    480: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
  },
};

export const Tap = ({ Data }) => {
  console.log(Data);
  const TapData = [
    { id: 1, button: "인기영화", content: Data.PopData.results },
    { id: 2, button: "평점이 높은 영화", content: Data.TrData.results },
    { id: 3, button: "개봉예정", content: Data.UpData.results },
  ];
  const [activeTap, setActiveTap] = useState(TapData[0].id);
  const [result, SetResult] = useState();
  useEffect(() => {
    const temp = TapData.filter((Td) => Td.id === activeTap);
    console.log(temp);
    SetResult(temp);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTap]);
  return (
    <>
      <TapWrap>
        <TapBox>
          {TapData.map((tap) => (
            <TapButton
              key={tap.id}
              $isActive={activeTap === tap.id ? true : false}
              onClick={() => setActiveTap(tap.id)}
            >
              {tap.button}
            </TapButton>
          ))}
          {result && <MovieEle movieData={result[0].content} />}
        </TapBox>
      </TapWrap>
    </>
  );
};
