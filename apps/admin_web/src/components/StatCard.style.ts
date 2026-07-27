import styled from "styled-components";

export const CardWrapper = styled.div`
  background-color: #d8d8d847;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 20px;
`;

export const Label = styled.p`
  font-size: 14px;
  color: #6b7280;
`;

export const Value = styled.p<{ $highlight?: boolean }>`
  font-size: 24px;
  font-weight: 700;
  margin-top: 8px;
  color: ${({ $highlight }) => ($highlight ? "#9333ea" : "#111827")};
`;
