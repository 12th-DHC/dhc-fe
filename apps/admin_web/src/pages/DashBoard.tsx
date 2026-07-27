import styled from "styled-components";
import { rooms } from "../data/room";

const weeklyCompletionRate = Math.round(
  rooms.reduce((sum, r) => sum + r.rate, 0) / rooms.length,
);

const uncheckedCount = rooms.filter((r) => r.status === "미완료").length;

export function DashBoard() {
  return (
    <>
      <Title>어드민 대시보드</Title>
      <P>기숙사 전체 청소 현황 요약</P>

      <Grid>
        <Card>
          <Label>전체 호실</Label>
          <Value>{rooms.length}</Value>
        </Card>

        <Card>
          <Label>이번주 완료율</Label>
          <Value $highlight>{weeklyCompletionRate}%</Value>
        </Card>

        <Card>
          <Label>미체크 호실</Label>
          <Value>{uncheckedCount}</Value>
        </Card>

        <Card>
          <Label>등록 이메일</Label>
          <Value>8</Value>
        </Card>
      </Grid>

      <RoomSection>
        <SectionTitle>호실 현황</SectionTitle>
        <TableWrapper>
          <Table>
            <thead>
              <tr>
                <Th>호실</Th>
                <Th>담당 학생 (A·B)</Th>
                <Th>상태</Th>
                <Th>완료율</Th>
              </tr>
            </thead>
            <tbody>
              {rooms.map((r) => (
                <Tr key={r.room}>
                  <Td $bold>{r.room}</Td>
                  <Td>{r.students}</Td>
                  <Td>
                    <Badge $done={r.status === "완료"}>{r.status}</Badge>
                  </Td>
                  <Td>{r.rate}%</Td>
                </Tr>
              ))}
            </tbody>
          </Table>
        </TableWrapper>
      </RoomSection>
    </>
  );
}

export default DashBoard;

const Title = styled.h1`
  font-size: 30px;
  font-weight: 700;
  text-align: left;
  color: #000000;
  margin: 0 0 4px;
`;

const P = styled.p`
  font-size: 15px;
  text-align: left;
  margin: 0 0 10px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
`;

const Card = styled.div`
  background-color: #d8d8d847;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 20px;
`;

const Label = styled.p`
  font-size: 14px;
  color: #6b7280;
`;

const Value = styled.p<{ $highlight?: boolean }>`
  font-size: 24px;
  font-weight: 700;
  margin-top: 8px;
  color: ${({ $highlight }) => ($highlight ? "#9333ea" : "#111827")};
`;

const RoomSection = styled.div`
  margin-top: 24px;
`;

const TableWrapper = styled.div`
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 12px 20px 20px;
  margin-top: 4px;
`;

const SectionTitle = styled.h2`
  font-size: 16px;
  font-weight: 700;
  margin: 0;
  text-align: left;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
`;

const Th = styled.th`
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

const Tr = styled.tr`
  border-top: 1px solid #f1f1f1;
`;

const Td = styled.td<{ $bold?: boolean }>`
  padding: 12px;
  font-size: 14px;
  font-weight: ${({ $bold }) => ($bold ? 700 : 400)};
`;

const Badge = styled.span<{ $done: boolean }>`
  display: inline-block;
  padding: 2px 10px;
  border-radius: 25%;
  font-size: 12px;
  font-weight: 600;
  background: ${({ $done }) => ($done ? "#dcfce7" : "#fef3c7")};
  color: ${({ $done }) => ($done ? "#16a34a" : "#d97706")};
`;
