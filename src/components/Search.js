import { useState } from "react";
import { useForm } from "react-hook-form";
import { SearchThing } from "../api/api";
import styled from "styled-components";
import { colors } from "./GlobalStyle";
import { Loading } from "./Loading";
import { Jackets } from "./Jackets";
import { Link } from "react-router-dom";
import Pagination from "react-js-pagination";
const SrchForm = styled.form`
  position: relative;
`;
const SrchBar = styled.input`
  align-self: center;
  font-size: 28px;
  border-radius: 18px;
  width: 100%;
  @media screen and (max-width: 800px) {
    font-size: 18px;
  }
`;
const ConWrap = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 120px;
  column-gap: 10px;
  @media screen and (max-width: 500px) {
    row-gap: 20px;
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
const SearchWrap = styled.div`
  display: flex;
  flex-direction: column;
`;
const PageWrap = styled.div`
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 150px;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  ul.pagination li {
    display: inline-block;
    width: 30px;
    height: 30px;
    border: 1px solid #e2e2e2;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
  }

  ul.pagination li:first-child {
    border-radius: 5px 0 0 5px;
  }

  ul.pagination li:last-child {
    border-radius: 0 5px 5px 0;
  }

  ul.pagination li a {
    text-decoration: none;
    color: #337ab7;
    font-size: 1rem;
  }

  ul.pagination li.active a {
    color: white;
  }

  ul.pagination li.active {
    background-color: #337ab7;
  }

  ul.pagination li a:hover,
  ul.pagination li a.active {
    color: blue;
  }

  .page-selection {
    width: 48px;
    height: 30px;
    color: #337ab7;
  }
`;
export const Search = () => {
  const [keywords, SetKeyWords] = useState("");
  const [SrcData, SetSrcData] = useState();
  const [loading, isLoading] = useState(false);
  const [page, SetPage] = useState(1);
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
      SetKeyWords(search);
      SetSrcData(result);
      isLoading(false);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  const handlePageChange = async (page) => {
    console.log(page);
    isLoading(true);
    SetPage(page);
    try {
      const result = await SearchThing(keywords, page);
      SetSrcData(result);
      isLoading(false);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SearchWrap>
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
      <PageWrap>
        <Pagination
          activePage={page}
          itemsCountPerPage={10}
          totalItemsCount={450}
          pageRangeDisplayed={5}
          onChange={handlePageChange}
        />
      </PageWrap>
    </SearchWrap>
  );
};

// {SrcData && <MovieEle movieData={SrcData.results}></MovieEle>}
