import styled from "@emotion/styled";

export const LoginWrapper = styled.div`
  width: 100%;
  min-height: 100svh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
`;

export const LoginCard = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fff;
  padding: 48px 32px;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: #000;
  text-align: center;
  margin: 0 0 8px;
`;

export const Desc = styled.p`
  font-size: 15px;
  color: #888;
  text-align: center;
  margin: 0 0 32px;
`;

export const Field = styled.div`
  margin-bottom: 32px;
`;

export const Label = styled.label`
  display: block;
  font-size: 13px;
  color: #888;
  margin-bottom: 6px;
`;

export const IdInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  background: #fff;
  padding: 12px 14px;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #954ff8;
  }
`;

export const PasswordInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  background: #fff;
  padding: 12px 14px;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #954ff8;
  }
`;

export const LoginButton = styled.button`
  width: 100%;
  background: #954ff8;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 12px 0;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    background: #7f3ce0;
  }
`;
