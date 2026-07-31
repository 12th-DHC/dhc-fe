import styled from "@emotion/styled";

export const RoomSection = styled.div`
  margin-top: 24px;
`;

export const TableWrapper = styled.div`
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  margin-top: 4px;
  overflow: hidden;
`;

export const SectionTitle = styled.h2`
  font-size: 16px;
  font-weight: 700;
  margin: 0;
  text-align: left;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
`;

export const Th = styled.th`
  text-align: left;
  font-size: 13px;
  color: #5c6370;
  background: #f9fafb;
  padding: 12px;

  &:nth-of-type(1) {
    width: 15%;
    padding-left: 20px;
  }
  &:nth-of-type(2) {
    width: 35%;
  }
  &:nth-of-type(3) {
    width: 25%;
  }
  &:nth-of-type(4) {
    width: 25%;
    padding-right: 20px;
  }
`;

export const Tr = styled.tr`
  border-top: 1px solid #f1f1f1;

  &:last-of-type td {
    padding-bottom: 20px;
  }
`;

export const Td = styled.td<{ $bold?: boolean; $danger?: boolean }>`
  padding: 12px;
  font-size: 14px;
  font-weight: ${({ $bold }) => ($bold ? 700 : 400)};
  color: ${({ $danger }) => ($danger ? "#dc2626" : "inherit")};

  &:first-of-type {
    padding-left: 20px;
  }
  &:last-of-type {
    padding-right: 20px;
  }
`;
