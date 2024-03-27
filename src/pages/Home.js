import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { NowPlaying, Popular, TopRated } from "../api/api";
import styled from "styled-components";
import { useInterval } from "../function/useInterval";
import { IMG_URL_ } from "../data/url";
import { Tap } from "../components/Tap";

const SrchBar = styled.input`
  border-radius: 20px;
  width: 100%;
  height: 10%;
`;
const SrchForm = styled.form`
  height: 300px;
  width: 400px;
  margin: auto;
`;
const Bg = styled.div`
  width: 100vw;
  height: 600px;
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
export const Home = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [data, SetData] = useState();
  const [TrData, SetTrData] = useState();
  const [PopData, setPopData] = useState();
  const [index, SetIndex] = useState(0);

  useEffect(() => {
    (async () => {
      try {
        const NowP = await NowPlaying();
        const MostR = await TopRated();
        const PopM = await Popular();
        SetData(NowP.results);
        SetTrData(MostR.results);
        setPopData(PopM);
        console.log(MostR);
        console.log(PopM);
      } catch (err) {
        console.log(err);
        alert(err);
      }
    })();
  }, []);
  useInterval(() => {
    if (data && index < data.length - 1) {
      SetIndex(index + 1);
    } else {
      SetIndex(0);
    }
  }, 4000);
  const onSubmit = (data) => {
    console.log(data);
    console.log(errors);
  };
  return (
    <>
      {data && (
        <>
          <Bg $bgUrl={data[index].backdrop_path}>
            <MovieTitle>{data[index].title}</MovieTitle>
          </Bg>
          <Tap></Tap>
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
        </>
      )}
    </>
  );
};
