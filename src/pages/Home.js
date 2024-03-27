import { useEffect, useState } from "react";
import { NowPlaying } from "../api/api";
import styled from "styled-components";
import { useInterval } from "../function/useInterval";
import { IMG_URL_ } from "../data/url";
import { Tap } from "../components/Tap";

const Bg = styled.div`
  width: 100vw;
  height: 600px;
  background: url(${IMG_URL_}${(props) => props.$bgUrl}) no-repeat center /
    cover;
  @media screen and (max-width: 640px) {
    height: 280px;
  }
  @media screen and (max-width: 450px) {
    height: 160px;
  }
`;

export const Home = () => {
  const [data, SetData] = useState();
  const [index, SetIndex] = useState(0);

  useEffect(() => {
    (async () => {
      const result = await NowPlaying();
      SetData(result.results);
    })();
  }, []);
  useInterval(() => {
    if (data && index < data.length - 1) {
      SetIndex(index + 1);
    } else {
      SetIndex(0);
    }
  }, 3000);
  const me = "";
  return (
    <>
      {data && (
        <Bg $bgUrl={data[index].backdrop_path}>
          <div>{data[index].title}</div>
        </Bg>
      )}
      <Tap></Tap>
    </>
  );
};
