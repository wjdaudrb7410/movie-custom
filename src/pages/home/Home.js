import { useEffect, useState } from "react";

import { NowPlaying, Popular, TopRated, Upcoming } from "../../api/api";
import styled from "styled-components";

import { MainBanner } from "./MainBanner";
import { Loading } from "../../components/Loading";
import { HelmetTitle } from "../../components/HelmeTitle";
import { Movies } from "../../components/Movies";

const MainSector = styled.div`
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  margin-top: 60px;
`;
const Catalogue = styled.div``;
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
          <>
            <MainSector>
              <HelmetTitle title={"Home"} />
              <MainBanner Data={data} />
              <Movies Data={TrData.results} Texts={"인기 영화"}></Movies>
            </MainSector>
          </>
        )
      ) : (
        <Loading></Loading>
      )}
    </>
  );
};
/* margin-bottom: ${//FootH.hegiht}; */
