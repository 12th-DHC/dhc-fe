import StatCard from "../components/StatCard";
import { rooms } from "../data/room";
import {
  Title,
  P,
  Grid,
  RoomSection,
  TableWrapper,
  SectionTitle,
  Table,
  Th,
  Tr,
  Td,
  Badge,
} from "./DashBoard.style";

const weeklyCompletionRate = Math.round(
  rooms.reduce((sum, r) => sum + r.rate, 0) / rooms.length,
);

const uncheckedCount = rooms.filter((r) => r.status === "미완료").length;

function DashBoard() {
  return (
    <>
      <Title>어드민 대시보드</Title>
      <P>기숙사 전체 청소 현황 요약</P>

      <Grid>
        <StatCard label="전체 호실" value={rooms.length} />
        <StatCard
          label="이번주 완료율"
          value={`${weeklyCompletionRate}%`}
          highlight
        />
        <StatCard label="미체크 호실" value={uncheckedCount} />
        <StatCard label="등록 이메일" value={8} />
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
