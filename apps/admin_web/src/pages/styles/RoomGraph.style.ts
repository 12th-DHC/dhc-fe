import { mainColor } from "@repo/ui";
import styled from "@emotion/styled";

export const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Text = styled.div``;

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

export const TrendGraph = styled.div`
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 24px 20px 12px;
`;

export const BarList = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 24px;
  height: 250px;
`;

export const BarItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
  height: 100%;
`;

export const BarValue = styled.span`
  font-size: 13px;
  font-weight: 600;
  color: #374151;
`;

export const Bar = styled.div<{ $rate: number }>`
  width: 100%;
  height: ${({ $rate }) => Math.min($rate, 100)}%;
  background: ${mainColor};
  border-radius: 6px 6px 0 0;
`;

export const BarLabel = styled.span`
  font-size: 13px;
  color: #6b7280;
  margin-top: 8px;
`;

export const BarTrack = styled.div`
  width: 100%;
  max-width: 48px;
  flex: 1;
  display: flex;
  align-items: flex-end;
`;
