import { Link } from "react-router-dom";
import styled from "styled-components";
import { routes } from "../routes";
import { colors } from "./GlobalStyle";
import { useEffect, useRef, useState } from "react";
import { useCookies } from "react-cookie";
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
  align-items: center;
`;
const MainTitle = styled.div`
  margin-left: 30px;
  font-size: 36px;
  font-weight: 400;
  @media screen and (max-width: 900px) {
    font-size: 24px;
  }
  @media screen and (max-width: 450) {
    margin-left: 10px;
    font-size: 12px;
  }
  a {
    color: ${colors.point};
  }
`;
const HeaderBtn = styled.button`
  background-color: transparent;
  border: 0;
  height: 100%;
  font-size: 18px;
  padding: 7px 50px;
  a {
    color: ${colors.black};
  }
  @media screen and (max-width: 450px) {
    padding: 0px 10px;
  }
`;
export const Header = () => {
  const [cookies, setCookie] = useCookies(["username"]);
  const [islog, setLog] = useState(false);
  const Headref = useRef();
  useEffect(() => {
    setCookie("username", "", { path: "/", maxAge: 0 });
    setCookie("password", "", { path: "/", maxAge: 0 });
  }, []);
  useEffect(() => {
    if (cookies.username) {
      setLog(true);
    } else {
      setLog(false);
    }
  }, [cookies]);
  const scrollHandler = () => {
    const pageY = window.scrollY;
    const current = Headref.current;

    if (pageY >= 600) {
      current.style.position = "fixed";
      current.style.backgroundColor = "rgba(0,0,0,0.5)";
      current.style.backdropFilter = "blur(10px)";
    } else {
      current.style.position = "absolute";
      current.style.backgroundColor = "transparent";
      current.style.backdropFilter = "blur(0px)";
    }
  };
  useEffect(() => {
    return window.addEventListener("scroll", scrollHandler);
  });
  return (
    <HeaderWrap ref={Headref}>
      <MainTitle>
        <Link to={routes.home}>Movie Custom</Link>
      </MainTitle>
      <div>
        <HeaderBtn>
          <Link to={"/search"}>검색</Link>
        </HeaderBtn>
        {islog ? (
          <HeaderBtn
            onClick={() => {
              setCookie("username", "");
            }}
          >
            <Link to={"/"}>로그아웃</Link>
          </HeaderBtn>
        ) : (
          <HeaderBtn>
            <Link to={"/login"}>로그인</Link>
          </HeaderBtn>
        )}
      </div>
    </HeaderWrap>
  );
};
