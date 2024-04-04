import { Link } from "react-router-dom";
import styled from "styled-components";
import { routes } from "../routes";
const HeaderWrap = styled.header`
  width: 100vw;
  height: 60px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  background-color: transparent;
  backdrop-filter: blur(10px);
`;
const MainTitle = styled.div`
  margin-top: 17px;
  margin-left: 60px;
  color: black;
  font-size: 36px;
  font-weight: 700;

  @media screen and (max-width: 900px) {
    font-size: 24px;
  }
`;
const HeaderBtn = styled.button`
  background-color: transparent;
  border: 0 solid white;
  height: 100%;
  font-size: 18px;
  padding: 7px 50px;
`;
export const Header = () => {
  return (
    <HeaderWrap>
      <MainTitle>
        <Link to={routes.home}>Movie Custom</Link>
      </MainTitle>

      <div>
        <HeaderBtn>
          <Link to={"/search"}>검색</Link>
        </HeaderBtn>
        <HeaderBtn>
          <Link to={"/login"}>로그인</Link>
        </HeaderBtn>
      </div>
    </HeaderWrap>
  );
};
