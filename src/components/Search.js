import { useState } from "react";
import { useForm } from "react-hook-form";
import { SearchThing } from "../api/api";
import styled from "styled-components";
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

export const Search = () => {
  const [SrcData, SetSrcData] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log({ data });
    const search = data.MovieName;
    try {
      const result = await SearchThing(search);
      SetSrcData(result);
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
        <p>{errors?.MovieName?.message}</p>
        {SrcData &&
          SrcData.results.map((data) => <div key={data.id}>{data.title}</div>)}
      </SrchForm>
    </>
  );
};
