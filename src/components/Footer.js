import styled from "styled-components";
import { FootH } from "./GlobalStyle";

export const FooterWrap = styled.footer`
  height: ${FootH.hegiht};
  position: relative;
  background-color: white;
`;
export const Footer = () => {
  return <FooterWrap>푸터</FooterWrap>;
};
