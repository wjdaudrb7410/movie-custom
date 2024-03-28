import { useEffect, useState } from "react";
import styled from "styled-components";
const TapWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 9.375rem;
  padding: 0 7.5rem;
`;
const TapBox = styled.div`
  display: table-cell;
  width: 440px;
  display: block;
`;
const TapButton = styled.button`
  width: 32%;
  border: none;
  padding: 10px 20px;
  background-color: ${(props) => (props.$isActive ? "#f0ece3" : "transparent")};
  color: ${(props) => (props.$isActive ? "black" : "grey")};
  cursor: pointer;
`;
const TapContent = styled.div`
  border-bottom: 1px solid #ccc;
  padding: 10px;
`;

export const Tap = ({ Data }) => {
  console.log(Data);
  const TapData = [
    { id: 1, button: "인기영화", content: Data.PopData.results },
    { id: 2, button: "평점이 높은 영화", content: Data.TrData.results },
    { id: 3, button: "개봉예정", content: Data.UpData.results },
  ];
  const [activeTap, setActiveTap] = useState(TapData[0].id);
  const [result, SetResult] = useState();
  useEffect(() => {
    const temp = TapData.filter((Td) => Td.id === activeTap);
    console.log(temp);
    SetResult(temp);
  }, [activeTap]);
  return (
    <>
      <TapWrap>
        <TapBox>
          {TapData.map((tap) => (
            <TapButton
              key={tap.id}
              $isActive={activeTap === tap.id ? true : false}
              onClick={() => setActiveTap(tap.id)}
            >
              {tap.button}
            </TapButton>
          ))}
          {result &&
            result[0].content.map((rsl) => (
              <TapContent key={rsl.id}>{rsl.title}</TapContent>
            ))}
        </TapBox>
      </TapWrap>
    </>
  );
};
