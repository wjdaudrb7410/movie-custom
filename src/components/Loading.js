import styled from "styled-components";
import { SyncLoader } from "react-spinners";
const Params = {
  color: "#36d7b7",
  size: 20,
};
const LoaderWrap = styled.div`
  align-self: center;
  width: 100%;
  height: 100vh;
  justify-content: center;
  text-align: center;
`;
const LoadingText = styled.div`
  margin-bottom: 30px;
  font-size: 40px;
  font-weight: bold;
`;
export const Loading = () => {
  return (
    <LoaderWrap>
      <LoadingText>로딩중</LoadingText>
      <SyncLoader {...Params}></SyncLoader>
    </LoaderWrap>
  );
};
