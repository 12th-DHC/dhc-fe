import styled from "styled-components";

export const Title = styled.h1`
  font-size: 30px;
  font-weight: 700;
  text-align: left;
  color: #000000;
  margin: 0 0 4px;
`;

export const P = styled.p`
  font-size: 15px;
  text-align: left;
  margin: 0 0 10px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
`;

export const RoomSection = styled.div`
  margin-top: 24px;
`;

export const TableWrapper = styled.div`
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 12px 20px 20px;
  margin-top: 4px;
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
  border-radius: 20px;
  padding: 10px 12px;

  &:nth-child(1) {
    width: 15%;
  }
  &:nth-child(2) {
    width: 35%;
  }
  &:nth-child(3) {
    width: 25%;
  }
  &:nth-child(4) {
    width: 25%;
  }
`;

export const Tr = styled.tr`
  border-top: 1px solid #f1f1f1;
`;

export const Td = styled.td<{ $bold?: boolean }>`
  padding: 12px;
  font-size: 14px;
  font-weight: ${({ $bold }) => ($bold ? 700 : 400)};
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
