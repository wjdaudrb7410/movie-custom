import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "./GlobalStyle";

const ButtonDesign = styled.button`
  font-size: 20px;
  font-family: "NotoSans-KR";
  background-color: transparent;
  bottom: 270px;
  padding: 5px 10px;
  left: 60px;
  position: relative;
  backdrop-filter: blur(3px);
  border-radius: 20px;
  @media screen and (max-width: 900px) {
    font-size: 15px;
    padding: 3px 2px;
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
