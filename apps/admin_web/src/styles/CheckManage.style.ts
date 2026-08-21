import styled from "@emotion/styled";
import { mainColor } from "@repo/ui";

export const DateNav = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

export const DateArrowButton = styled.button`
  width: 34px;
  height: 34px;
  margin-bottom: 8px;
  flex-shrink: 0;
  border: 1px solid #e9e9ed;
  border-radius: 10px;
  background-color: #ffffff;
  color: #6b7280;
  font-size: 16px;
  line-height: 1;
  cursor: pointer;

  &:hover:not(:disabled) {
    background-color: #f9fafb;
    color: #4b5563;
  }

  &:disabled {
    color: #d1d5db;
    cursor: default;
  }
`;

export const DateLabel = styled.div<{ $isToday: boolean }>`
  min-width: 200px;
  margin-bottom: 5px;
  text-align: center;
  font-size: 15px;
  font-weight: 700;
  color: ${({ $isToday }) => ($isToday ? "#111827" : mainColor)};
`;

export const CheckSection = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;

export const StudentColumn = styled.div`
  box-sizing: border-box;
  padding: 16px;
  border-radius: 14px;
  border: 1px solid #eeeef4;
  background-color: #fbfbfd;
`;

export const StudentColumnTitle = styled.h4`
  margin: 0 0 12px;
  font-size: 14px;
  font-weight: 700;
  color: ${mainColor};
`;

export const SaveRow = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const SaveButton = styled.button<{ $dirty: boolean }>`
  background-color: ${({ $dirty }) => ($dirty ? mainColor : "#e5e7eb")};
  color: ${({ $dirty }) => ($dirty ? "#ffffff" : "#9ca3af")};
  border: none;
  border-radius: 10px;
  padding: 12px 24px;
  font-size: 14px;
  font-weight: 700;
  cursor: ${({ $dirty }) => ($dirty ? "pointer" : "default")};
  transition:
    background-color 0.15s ease,
    color 0.15s ease;

  &:hover {
    background-color: ${({ $dirty }) => ($dirty ? "#7f3ce0" : "#e5e7eb")};
  }
`;
