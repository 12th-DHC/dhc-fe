import { rooms } from "../data/Room";
import { weeklyTrend } from "../data/WeeklyTrend";
import { Title, Desc } from "./styles/PageHeader.style";
import {
  RoomSection,
  TableWrapper,
  SectionTitle,
  Table,
  Th,
  Tr,
  Td,
} from "./styles/SectionTable.style";
import {
  Head,
  Text,
  ExportButton,
  Badge,
  TrendGraph,
  Bar,
  BarList,
  BarItem,
  BarLabel,
  BarValue,
  BarTrack,
} from "./styles/RoomGraph.style";

function RoomGraph() {
  return (
    <>
      <Head>
        <Text>
          <Title>전체 호실 통계</Title>
          <Desc>이번주 청소 체크 현황</Desc>
        </Text>

        <ExportButton>시트로 내보내기</ExportButton>
      </Head>

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
                    <Badge $done={r.rate === 100}>
                      {r.rate === 100 ? "완료" : "미완료"}
                    </Badge>
                  </Td>
                  <Td>{r.rate}%</Td>
                </Tr>
              ))}
            </tbody>
          </Table>
        </TableWrapper>
      </RoomSection>

      <RoomSection>
        <SectionTitle>주차별 완료 추이</SectionTitle>
        <TrendGraph>
          <BarList>
            {weeklyTrend.map((w) => (
              <BarItem key={w.week}>
                <BarTrack>
                  <Bar $rate={w.rate} />
                </BarTrack>
                <BarLabel>{w.week}</BarLabel>
                <BarValue>{Math.round(w.rate)}%</BarValue>
              </BarItem>
            ))}
          </BarList>
        </TrendGraph>
      </RoomSection>
    </>
  );
}

export default RoomGraph;
