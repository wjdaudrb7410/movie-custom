import { useState } from "react";
import { useForm } from "react-hook-form";
import { SearchThing } from "../api/api";
import styled from "styled-components";
import { colors } from "./GlobalStyle";
import { Loading } from "./Loading";
import { Jackets } from "./Jackets";
import { Link } from "react-router-dom";
const SrchForm = styled.form`
  position: relative;
`;
const SrchBar = styled.input`
  font-size: 28px;
  border-radius: 18px;
  width: 350px;
  @media screen and (max-width: 800px) {
    font-size: 18px;
  }
`;
const ConWrap = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 30px;
  column-gap: 10px;
  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
const ErrText = styled.p`
  color: ${colors.point};
  font-weight: 300;
  border-bottom: 1px solid grey;
`;
const JacketWrap = styled.div`
  width: 200px;
  height: 300px;
  @media screen and (max-width: 900px) {
    height: 200px;
  }
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
    isLoading(true);
    console.log({ data });
    const search = data.MovieName;
    search.replace(" ", "");
    try {
      const result = await SearchThing(search);
      SetSrcData(result);
      isLoading(false);
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
      </SrchForm>

      {SrcData && (
        <ConWrap>
          {loading ? (
            <Loading />
          ) : (
            <>
              {SrcData.results.map((rsl) => (
                <JacketWrap key={rsl.id}>
                  <Link to={`/detail/${rsl.id}`}>
                    <Jackets Data={rsl}></Jackets>
                  </Link>
                </JacketWrap>
              ))}
            </>
          )}
        </ConWrap>
      )}
    </>
  );
};

// {SrcData && <MovieEle movieData={SrcData.results}></MovieEle>}
