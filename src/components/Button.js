import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "./GlobalStyle";

const ButtonDesign = styled.button`
  box-sizing: content-box;
  font-size: 20px;
  font-family: "NotoSans-KR";
  background-color: transparent;
  padding: 5px 10px;
  position: relative;
  backdrop-filter: blur(3px);
  border-radius: 20px;
  @media screen and (max-width: 900px) {
    font-size: 15px;
    padding: 3px 2px;
  }
  @media screen and (max-width: 450px) {
    font-size: 10px;
    padding: 3px 2px;
  }
  a {
    color: ${colors.white};
  }
  &:hover {
    border: 2px solid ${colors.point};
  }
`;

export const Button = ({ Text, id }) => {
  return (
    <>
      <ButtonDesign>
        <Link to={`/detail/${id}`}>{Text}</Link>
      </ButtonDesign>
    </>
  );
};
