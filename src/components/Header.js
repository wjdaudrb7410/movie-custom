import { Link } from "react-router-dom";
import styled from "styled-components";
import { routes } from "../routes";
import { Button } from "./Button";
const HeaderWrap = styled.header`
  width: 100vw;
  height: 60px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  top: 0;
  left: 0;
  bottom: 0;
  backdrop-filter: blur(3px);
  z-index: 10;
  background: linear-gradient(
    45deg,
    rgba(0, 24, 255, 1) 0%,
    rgba(0, 24, 255, 1) 30%,
    rgba(0, 249, 255, 0.8225665266106442) 30%,
    rgba(0, 249, 255, 0.27074579831932777) 100%
  );
`;
const MainTitle = styled.div`
  margin-top: 5px;
  margin-left: 20px;
  color: black;
  font-size: 36px;
  font-weight: 700;
`;
const HeaderBtn = styled.button`
  background-color: transparent;
  border: 0 solid white;
  height: 100%;
  font-size: 24px;
  padding: 10px 50px;
`;
export const Header = () => {
  return (
    <HeaderWrap>
      <Link to={routes.home}>
        <MainTitle>Movie Custom</MainTitle>
      </Link>
      <div>
        <Link to={"/search"}>
          <HeaderBtn>검색</HeaderBtn>
        </Link>
        <Link to={"/login"}>
          <HeaderBtn>로그인</HeaderBtn>
        </Link>
      </div>
    </HeaderWrap>
  );
};
