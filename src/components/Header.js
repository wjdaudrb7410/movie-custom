import { Link } from "react-router-dom";
import styled from "styled-components";
import { routes } from "../routes";

const HeaderWrap = styled.header`
  width: 100vw;
  height: 30px;
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  bottom: 0;
  backdrop-filter: blur(3px);
  z-index: 10;
`;
const MainTitle = styled.div`
  color: cadetblue;
  font-size: x-large;
`;
export const Header = () => {
  return (
    <HeaderWrap>
      <Link to={routes.home}>
        <MainTitle>Movie Custom</MainTitle>
      </Link>
    </HeaderWrap>
  );
};
