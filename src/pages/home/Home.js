import { useEffect, useState } from "react";

import { NowPlaying, Popular, TopRated, Upcoming } from "../../api/api";
import styled from "styled-components";

import { Tap } from "../../components/Tap";
import { MainBanner } from "./MainBanner";
import { Search } from "../../components/Search";
import { Loading } from "../../components/Loading";
import { HelmetTitle } from "../../components/HelmeTitle";

const ConWrap = styled.div`
  height: 1500px;
  width: 100vw;
`;

const MainSector = styled.div`
  width: 100vw;
  display: flex;
  margin-top: 60px;
`;
const SampleButton = styled.button`
  border-radius: 0;
  padding: 0 5px;
  width: 100px;
  display: block;
  height: 10%;
`;
const Catalogue = styled.div`
  width: 100%;
  background-color: blue;
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
          <>
            <MainSector>
              <HelmetTitle title={"Home"} />
              <MainBanner Data={data} />
              <Search />
            </MainSector>
            <Tap Data={{ UpData, TrData, PopData }} />
          </>
        )
      ) : (
        <Loading></Loading>
      )}
    </>
  );
};

// <MainSector>
//   <MainBannerArea $bCol="blue" $wCol="75%"></MainBannerArea>
//   <MainBannerArea $bCol="red" $wCol="25%"></MainBannerArea>
// </MainSector>
// <div>카탈로그 구간입니다</div>
// <CatSection>
//   <ButtonSection>
//     <SampleButton>상영중인 영화</SampleButton>
//     <SampleButton>최신 영화</SampleButton>
//     <SampleButton>상영중인 영화</SampleButton>
//     <SampleButton>상영중인 영화</SampleButton>
//   </ButtonSection>
//   <Catalogue></Catalogue>
// </CatSection>
