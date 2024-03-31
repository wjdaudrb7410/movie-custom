import { useEffect, useState } from "react";

import { NowPlaying, Popular, TopRated, Upcoming } from "../../api/api";
import styled from "styled-components";

import { Tap } from "../../components/Tap";
import { MainBanner } from "./MainBanner";
import { Search } from "../../components/Search";
import { Loading } from "../../components/Loading";

const ConWrap = styled.div`
  height: 1500px;
  width: 100vw;
`;

export const Home = () => {
  const [data, SetData] = useState();
  const [TrData, SetTrData] = useState();
  const [PopData, setPopData] = useState();
  const [UpData, setUpData] = useState();
  const [loading, isLoading] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        const NowP = await NowPlaying();
        const MostR = await TopRated();
        const PopM = await Popular();
        const UpcM = await Upcoming();
        SetData(NowP);
        SetTrData(MostR);
        setPopData(PopM);
        setUpData(UpcM);
        isLoading(true);
        console.log(MostR);
        console.log(PopM);
      } catch (err) {
        console.log(err);
        alert(err);
      }
    })();
  }, []);

  return (
    <>
      {loading ? (
        data && (
          <ConWrap>
            <MainBanner Data={data} />
            <Search />
            <Tap Data={{ UpData, TrData, PopData }} />
          </ConWrap>
        )
      ) : (
        <Loading></Loading>
      )}
    </>
  );
};
