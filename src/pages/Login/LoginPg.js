import styled from "styled-components";
import { HelmetTitle } from "../../components/HelmeTitle";
import { colors } from "../../components/GlobalStyle";
import { FaRegUser } from "react-icons/fa";
import { FaUnlock } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
const Pattern = {
  id: /^[a-zA-Z][0-9a-zA-Z]/,
  password: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9])./,
};
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
  border-radius: 20px;
  background-color: transparent;
  margin: 20px 30px;
  transition: 500ms;

  cursor: ${(props) => (props.$Isdone ? "pointer" : "default")};
  &:hover {
    background-color: ${(props) =>
      props.$Isdone ? colors.point : "transparent"};
  }
`;
const ErrMsg = styled.div`
  color: ${colors.red};
`;
export const LoginPg = () => {
  const [cookies, setCookie] = useCookies(["username", "password"]);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    setCookie("username", data.username, { path: "/", maxAge: 100000 });
    setCookie("password", data.password, { path: "/", maxAge: 100000 });
    navigate("/");
  };
  return (
    <>
      <HelmetTitle title={"Login"}></HelmetTitle>
      <LoginWrap>
        <LoginForm onSubmit={handleSubmit(onSubmit)}>
          <LogTitle>로그인</LogTitle>
          <BarWrap>
            <FaRegUser size={40} strokeWidth={5} />
            <LoginBar
              type="text"
              placeholder="아이디"
              {...register("username", {
                required: "아이디는 필수입니다.",
                minLength: {
                  value: 3,
                  message: "아이디는 최소 3자리 입니다.",
                },
                pattern: {
                  value: Pattern.id,
                  message: "영문 숫자만 입력 가능합니다.",
                },
              })}
            />
          </BarWrap>
          <ErrMsg>{errors?.username?.message}</ErrMsg>
          <BarWrap>
            <FaUnlock size={40} strokeWidth={5} />
            <LoginBar
              type="password"
              placeholder="비밀번호"
              {...register("password", {
                required: "비밀번호는 필수 입니다.",
                minLength: {
                  value: 8,
                  message: "비밀번호는 최소 8자리 입니다.",
                },
                pattern: {
                  value: Pattern.password,
                  message: "비밀번호는 영문,숫자,특수문자 조합입니다.",
                },
              })}
            ></LoginBar>
          </BarWrap>
          <ErrMsg>{errors?.password?.message}</ErrMsg>
          <LogBtn $Isdone={isValid}>로그인</LogBtn>
        </LoginForm>
      </LoginWrap>
    </>
  );
};
