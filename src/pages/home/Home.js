import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { NowPlaying, Popular, TopRated, Upcoming } from "../../api/api";
import styled from "styled-components";

import { Tap } from "../../components/Tap";
import { MainBanner } from "./MainBanner";

const ConWrap = styled.div``;
const SrchBar = styled.input`
  border-radius: 20px;
  width: 100%;
  height: 100%;
`;
const SrchForm = styled.form`
  height: 30px;
  width: 400px;
  margin: auto;
`;

export const Home = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [data, SetData] = useState();
  const [TrData, SetTrData] = useState();
  const [PopData, setPopData] = useState();
  const [UpData, setUpData] = useState();
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
        console.log(MostR);
        console.log(PopM);
      } catch (err) {
        console.log(err);
        alert(err);
      }
    })();
  }, []);

  const onSubmit = (data) => {
    console.log(data);
    console.log(errors);
  };
  return (
    <>
      {data && (
        <ConWrap>
          <MainBanner Data={data} />
          <SrchForm onSubmit={handleSubmit(onSubmit)}>
            <SrchBar
              type="text"
              placeholder="검색"
              {...register("MovieName", {
                required: "영화제목을 입력해주세요",
              })}
            ></SrchBar>
            <p>{errors?.MovieName?.message}</p>
          </SrchForm>
          <Tap Data={{ UpData, TrData, PopData }} />
        </ConWrap>
      )}
    </>
  );
};
