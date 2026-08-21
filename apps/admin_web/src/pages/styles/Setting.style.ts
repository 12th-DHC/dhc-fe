import styled from "@emotion/styled";

export const SettingList = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const SettingCard = styled.div<{ $danger?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border-radius: 12px;
  border: 1px solid ${({ $danger }) => ($danger ? "#fecaca" : "#eee")};
  background-color: ${({ $danger }) => ($danger ? "#fef2f2" : "#d8d8d847")};
`;

export const CardInfo = styled.div``;

export const CardTitle = styled.h3<{ $danger?: boolean }>`
  font-size: 15px;
  font-weight: 600;
  margin: 0 0 4px;
  color: ${({ $danger }) => ($danger ? "#dc2626" : "#000000")};
`;

export const CardDesc = styled.p`
  font-size: 13px;
  color: #888;
  margin: 0;
`;

export const TimeBadge = styled.button`
  background: #fff;
  color: #111;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    background: #f9fafb;
  }
`;

export const TimeEditWrapper = styled.div`
  position: relative;
`;

export const TimePopover = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
  background: #fff;
  border: 1px solid #eee;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
`;

export const TimeSelectRow = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const ResetButton = styled.button`
  background: #fff;
  color: #dc2626;
  border: 1px solid #dc2626;
  border-radius: 8px;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    background: #fee2e2;
  }
`;
