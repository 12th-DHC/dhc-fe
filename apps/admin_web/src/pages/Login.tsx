import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useLogin } from "../queries/useLogin";
import { isAuthenticated } from "../utils/auth";
import {
  LoginWrapper,
  LoginCard,
  Title,
  Desc,
  Field,
  Label,
  IdInput,
  PasswordInput,
  ErrorText,
  LoginButton,
} from "../styles/Login.style";

function Login() {
  const navigate = useNavigate();
  const [adminUsername, setAdminUsername] = useState("");
  const [adminPassword, setAdminPassword] = useState("");

  const { mutate, isPending, error } = useLogin(() => navigate("/"));

  const errorMessage = error?.response?.data?.message ?? error?.message ?? null;

  const handleLogin = () => {
    mutate({ adminUsername, adminPassword });
  };

  if (isAuthenticated()) {
    return <Navigate to="/" replace />;
  }

  return (
    <LoginWrapper>
      <LoginCard>
        <Title>관리자 로그인</Title>
        <Desc>아이디와 비밀번호를 입력해 로그인하세요</Desc>

        <Field>
          <Label>아이디</Label>
          <IdInput
            type="text"
            placeholder="아이디 입력"
            value={adminUsername}
            onChange={(e) => setAdminUsername(e.target.value)}
          />
        </Field>

        <Field>
          <Label>비밀번호</Label>
          <PasswordInput
            type="password"
            placeholder="비밀번호 입력"
            value={adminPassword}
            onChange={(e) => setAdminPassword(e.target.value)}
          />
        </Field>

        {errorMessage && <ErrorText>{errorMessage}</ErrorText>}

        <LoginButton type="button" disabled={isPending} onClick={handleLogin}>
          {isPending ? "로그인 중..." : "로그인"}
        </LoginButton>
      </LoginCard>
    </LoginWrapper>
  );
}

export default Login;
