import { mainColor } from "@repo/ui";
import styled from "@emotion/styled";

export const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Text = styled.div``;

export const Alarm = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border-radius: 12px;
  border: 1px solid #eee;
  background-color: #d8d8d847;
`;

export const CardInfo = styled.div``;

export const CardTitle = styled.h3`
  font-size: 15px;
  font-weight: 600;
  margin: 0 0 4px;
  color: #000000;
`;

export const CardDesc = styled.p`
  font-size: 13px;
  color: #888;
  margin: 0;
`;

export const CardResult = styled.p<{ isError?: boolean }>`
  font-size: 13px;
  margin-top: 6px;
`;

export const SendButton = styled.button`
  background: linear-gradient(90deg, #7f5af0, #6246ea);
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
`;

export const EmailRegister = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
