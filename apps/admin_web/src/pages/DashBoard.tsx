import StatCard from "../components/StatCard";
import { rooms } from "../data/Room";
import { Title, Desc } from "../styles/PageHeader.style";
import {
  RoomSection,
  TableWrapper,
  SectionTitle,
  Table,
  Th,
  Tr,
  Td,
} from "../styles/SectionTable.style";
import { Grid } from "../styles/Dashboard.style";

const weeklyCompletionRate = Math.round(
  rooms.reduce((sum, r) => sum + r.rate, 0) / rooms.length,
);

const incompleteRooms = rooms.filter((r) => r.rate < 100);
const uncheckedCount = incompleteRooms.length;

function DashBoard() {
  return (
    <>
      <Title>어드민 대시보드</Title>
      <Desc>기숙사 전체 청소 현황 요약</Desc>

      <Grid>
        <StatCard label="전체 호실" value={rooms.length} />
        <StatCard
          label="이번주 완료율"
          value={`${weeklyCompletionRate}%`}
          highlight
        />
        <StatCard label="미완료 호실" value={uncheckedCount} />
        <StatCard label="등록 이메일" value={8} />
      </Grid>

      <RoomSection>
        <SectionTitle>미완료 호실</SectionTitle>
        <TableWrapper>
          <Table>
            <thead>
              <tr>
                <Th>호실</Th>
                <Th>담당 학생 (A·B)</Th>
                <Th>완료율</Th>
              </tr>
            </thead>
            <tbody>
              {incompleteRooms.map((r) => (
                <Tr key={r.room}>
                  <Td $bold>{r.room}</Td>
                  <Td>{r.students}</Td>
                  <Td $danger={r.rate < 100}>{r.rate}%</Td>
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
