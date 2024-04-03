import styled from "styled-components";
import { SyncLoader } from "react-spinners";
const Params = {
  color: "#36d7b7",
  size: 20,
};
const LoaderWrap = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: #ffffffb7;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const LoadingText = styled.div`
  margin-bottom: 20px;
  font-weight: 700;
  font-size: 36px;
  text-align: center;
`;
export const Loading = () => {
  return (
    <LoaderWrap>
      <LoadingText>로딩중</LoadingText>
      <SyncLoader {...Params}></SyncLoader>
    </LoaderWrap>
  );
};
