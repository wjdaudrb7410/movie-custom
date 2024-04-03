import { useState } from "react";
import { useForm } from "react-hook-form";
import { SearchThing } from "../api/api";
import styled from "styled-components";
import { MovieEle } from "./MovEle";
import { FootH } from "./GlobalStyle";
const SrchForm = styled.form`
  overflow: hidden;
  height: 100%;
  width: 100%;
  margin-bottom: ${FootH.hegiht};
`;
const SrchBar = styled.input`
  font-size: 28px;
  border-radius: 20px;
  width: 91%;
  height: 30px;
`;

const ErrText = styled.p`
  color: crimson;
  font-weight: 300;
  border-bottom: 1px solid grey;
`;
export const Search = () => {
  const [SrcData, SetSrcData] = useState();
  const [loading, isLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log({ data });
    const search = data.MovieName;
    search.replace(" ", "");
    try {
      const result = await SearchThing(search);
      SetSrcData(result);
      isLoading(true);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <SrchForm onSubmit={handleSubmit(onSubmit)}>
        <SrchBar
          type="text"
          placeholder="검색"
          {...register("MovieName", {
            required: "영화제목을 입력해주세요",
          })}
        ></SrchBar>
        <ErrText>{errors?.MovieName?.message}</ErrText>
        {SrcData && <MovieEle movieData={SrcData.results}></MovieEle>}
      </SrchForm>
    </>
  );
};
