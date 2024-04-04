import styled from "styled-components";
import { HelmetTitle } from "../../components/HelmeTitle";
import { colors } from "../../components/GlobalStyle";
import { FaRegUser } from "react-icons/fa";
import { FaUnlock } from "react-icons/fa";
import { useForm } from "react-hook-form";
const LoginWrap = styled.div`
  display: flex;
  justify-content: center;
  padding: 200px;
`;
const LoginForm = styled.form`
  width: 400px;
  border: 5px solid black;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const LogTitle = styled.div`
  font-weight: bold;
  color: ${colors.point};
  font-size: 28px;
  padding: 20px 20px;
`;
const LoginBar = styled.input`
  height: 50px;
  font-size: 20px;
  border: 0;
  padding: 15px 20px;
  &:focus {
    outline: none;
  }
`;
const BarWrap = styled.div`
  display: flex;
  vertical-align: middle;
  text-align: center;
`;
const LogBtn = styled.button`
  font-size: 20px;
  margin: 20px 30px;
`;
export const LoginPg = () => {
  const {
    register,
    handleSumbit,
    formState: { errors },
  } = useForm();
  const onSubmit = () => {
    console.log("로그인됨");
  };
  return (
    <>
      <HelmetTitle title={"Login"}></HelmetTitle>
      <LoginWrap>
        <LoginForm>
          <LogTitle>로그인</LogTitle>
          <BarWrap>
            <FaRegUser size={40} strokeWidth={5} />
            <LoginBar
              type="text"
              placeholder="아이디"
              {...register("username", {
                required: "아이디는 필수 입니다.",
                minLength: {
                  value: 8,
                  message: "아이디 최소",
                },
              })}
            />
          </BarWrap>
          <BarWrap>
            <FaUnlock size={40} strokeWidth={5} />
            <LoginBar type="text" placeholder="비밀번호"></LoginBar>
          </BarWrap>
          <LogBtn>로그인</LogBtn>
        </LoginForm>
      </LoginWrap>
    </>
  );
};
