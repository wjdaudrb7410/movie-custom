import { useEffect, useState } from "react";

import styled from "styled-components";

import { IMG_URL_500 } from "../data/url";
import { MovieEle } from "./MovEle";
const CatSection = styled.div`
  display: flex;
  width: 100vw;
  height: 500px;
`;
const ButtonSection = styled.div``;
const TapBox = styled.div`
  width: 100vw;
  height: 500px;
  display: flex;
`;
const TapButton = styled.button`
  display: block;
  width: 100px;
  height: 10%;
  border: none;
  padding: 0 7px;
  background-color: ${(props) => (props.$isActive ? "#f0ece3" : "transparent")};
  color: ${(props) => (props.$isActive ? "black" : "grey")};
  cursor: pointer;
`;
const Catalogue = styled.div`
  width: 100%;
  border: 1px solid black;
`;

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
      <CatSection>
        <ButtonSection>
          {TapData.map((tap) => (
            <TapButton
              key={tap.id}
              $isActive={activeTap === tap.id ? true : false}
              onClick={() => setActiveTap(tap.id)}
            >
              {tap.button}
            </TapButton>
          ))}
        </ButtonSection>
        <Catalogue>
          {result && <MovieEle movieData={result[0].content} />}
        </Catalogue>
      </CatSection>
    </>
  );
};

{
  /* 
  {result && <MovieEle movieData={result[0].content} />}
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
      </TapWrap> */
}
