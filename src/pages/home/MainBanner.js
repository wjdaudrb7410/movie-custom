import { useInterval } from "../../function/useInterval";
import { IMG_URL_ } from "../../data/url";
import styled from "styled-components";
import { useState } from "react";

const Bg = styled.div`
  width: 100vw;
  height: 700px;
  display: table-cell;
  vertical-align: bottom;
  background: url(${IMG_URL_}${(props) => props.$bgUrl}) no-repeat center /
    cover;
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
  const [index, SetIndex] = useState(0);
  useInterval(() => {
    if (Data && index < Data.results.length - 1) {
      SetIndex(index + 1);
    } else {
      SetIndex(0);
    }
  }, 4000);
  return (
    <Bg $bgUrl={Data.results[index].backdrop_path}>
      <MovieTitle>{Data.results[index].title}</MovieTitle>
    </Bg>
  );
};
