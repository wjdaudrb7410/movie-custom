import styled from "styled-components";
import { Search } from "../../components/Search";
import { HelmetTitle } from "../../components/HelmeTitle";
const SearchWrap = styled.section`
  padding: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const SearchPg = () => {
  return (
    <SearchWrap>
      <HelmetTitle title={"Search"}></HelmetTitle>
      <Search></Search>
    </SearchWrap>
  );
};
