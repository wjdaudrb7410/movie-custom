import styled from "styled-components";

const ButtonDesign = styled.button`
  font-size: 25px;
  font-family: "NotoSans-KR";
  background-color: transparent;
  padding: 10px 30px;
  margin-left: 30px;
  position: absolute;
  backdrop-filter: blur(5px);
  border-radius: 20px;
  bottom: 15%;
  @media screen and (max-width: 900px) {
    font-size: 15px;
    padding: 3px 2px;
  }
`;

export const Button = ({ Text, Bbot = "" }) => {
  return (
    <>
      <ButtonDesign style={{ bottom: Bbot }}>{Text}</ButtonDesign>
    </>
  );
};
