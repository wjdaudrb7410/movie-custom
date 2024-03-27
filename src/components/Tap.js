import { useState } from "react";
import styled from "styled-components";
const TapWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 9.375rem;
  padding: 0 7.5rem;
`;
const TapBox = styled.div`
  width: 440px;
  display: block;
  border-bottom: 1px solid #ccc;
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
  padding: 10px;
`;

const TapData = [
  { id: 1, button: "인기영화", content: "인기있는 영화" },
  { id: 2, button: "평점이 높은 영화", content: "평점이 높은 영화" },
  { id: 3, button: "개봉예정", content: "개봉예정인 영화" },
];
export const Tap = () => {
  const [activeTap, setActiveTap] = useState(TapData[0].id);
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
          <TapContent>
            {TapData.find((a) => a.id === activeTap)?.content}
          </TapContent>
        </TapBox>
      </TapWrap>
    </>
  );
};
