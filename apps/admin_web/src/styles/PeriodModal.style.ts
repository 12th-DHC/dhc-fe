import { mainColor } from "@repo/ui";
import styled from "@emotion/styled";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 100;
  background: rgba(17, 24, 39, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalCard = styled.div`
  width: 380px;
  background: #fff;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 20px 48px rgba(0, 0, 0, 0.2);
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const ModalTitle = styled.h3`
  margin: 0;
  font-size: 18px;
  font-weight: 700;
  color: #111827;
`;

export const CloseButton = styled.button`
  width: 28px;
  height: 28px;
  border: none;
  border-radius: 8px;
  background: transparent;
  color: #6b7280;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background: #f3f4f6;
    color: #111827;
  }
`;

export const SectionLabel = styled.span`
  display: block;
  font-size: 13px;
  font-weight: 600;
  color: #6b7280;
  margin-bottom: 8px;
`;

export const OptionGroup = styled.div`
  margin-bottom: 16px;
`;

export const MonthGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 6px;
`;

export const WeekGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 6px;
`;

export const OptionButton = styled.button<{ $selected?: boolean }>`
  height: 36px;
  border-radius: 8px;
  border: 1px solid ${({ $selected }) => ($selected ? mainColor : "#e5e7eb")};
  background: ${({ $selected }) => ($selected ? "#f3e8ff" : "#fff")};
  color: ${({ $selected }) => ($selected ? mainColor : "#374151")};
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    border-color: ${mainColor};
    color: ${mainColor};
  }
`;

export const CancelButton = styled.button`
  width: 50%;
  height: 44px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background: #fff;
  color: #374151;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: #f3f4f6;
  }
`;

export const Footer = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 24px;
`;
