import { mainColor } from "@repo/ui";
import styled from "@emotion/styled";

export const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
`;

export const Text = styled.div``;

export const HeadActions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const PeriodTrigger = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  height: 44px;
  background: #fff;
  border: 1px solid #d1d5db;
  border-radius: 10px;
  color: #111827;
  font-size: 15px;
  font-weight: 600;
  padding: 0 14px;
  cursor: pointer;

  span {
    color: ${mainColor};
    font-size: 10px;
  }

  &:hover {
    border-color: ${mainColor};
  }
`;

export const ExportButton = styled.button`
  background: #fff;
  border: 1.5px solid ${mainColor};
  color: ${mainColor};
  font-size: 15px;
  font-weight: 600;
  padding: 12px 24px;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background: #f3e8ff;
  }
`;

export const Badge = styled.span<{ $done: boolean }>`
  display: inline-block;
  padding: 2px 10px;
  border-radius: 25%;
  font-size: 12px;
  font-weight: 600;
  background: ${({ $done }) => ($done ? "#dcfce7" : "#fef3c7")};
  color: ${({ $done }) => ($done ? "#16a34a" : "#d97706")};
`;
