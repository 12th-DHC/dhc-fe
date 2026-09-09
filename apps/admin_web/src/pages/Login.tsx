import { useNavigate } from "react-router-dom";
import {
  LoginWrapper,
  LoginCard,
  Title,
  Desc,
  Field,
  Label,
  IdInput,
  PasswordInput,
  LoginButton,
} from "../styles/Login.style";

function Login() {
  const navigate = useNavigate();

  return (
    <LoginWrapper>
      <LoginCard>
        <Title>관리자 로그인</Title>
        <Desc>아이디와 비밀번호를 입력해 로그인하세요</Desc>

        <Field>
          <Label>아이디</Label>
          <IdInput type="text" placeholder="아이디 입력" />
        </Field>

        <Field>
          <Label>비밀번호</Label>
          <PasswordInput type="password" placeholder="비밀번호 입력" />
        </Field>

        <LoginButton type="button" onClick={() => navigate("/")}>
          로그인
        </LoginButton>
      </LoginCard>
    </LoginWrapper>
  );
}

export default Login;
