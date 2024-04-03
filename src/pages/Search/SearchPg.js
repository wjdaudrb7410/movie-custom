import styled from "styled-components";
import { Search } from "../../components/Search";
const SearchWrap = styled.div`
  padding-top: 150px;
`;
export const SearchPg = () => {
  return (
    <SearchWrap>
      <Search></Search>
    </SearchWrap>
  );
};
