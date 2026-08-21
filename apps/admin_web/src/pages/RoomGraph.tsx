import { useState } from "react";
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
import {
  Head,
  Text,
  ExportButton,
  Badge,
  HeadActions,
  PeriodTrigger,
} from "../styles/RoomGraph.style";
import PeriodModal from "../components/PeriodModal";

function RoomGraph() {
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [week, setWeek] = useState(1);
  const [isPeriodModalOpen, setIsPeriodModalOpen] = useState(false);

  return (
    <>
      <Head>
        <Text>
          <Title>전체 호실 통계</Title>
          <Desc>
            {month}월 {week}주차 청소 체크 현황
          </Desc>
        </Text>

        <HeadActions>
          <PeriodTrigger
            type="button"
            onClick={() => setIsPeriodModalOpen(true)}
            aria-label="기간 선택"
          >
            {month}월 {week}주차 <span>▾</span>
          </PeriodTrigger>
          <ExportButton>시트로 내보내기</ExportButton>
        </HeadActions>
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
                <Th>미완료 개수</Th>
              </tr>
            </thead>
            <tbody>
              {rooms.map((r) => (
                <Tr key={r.room}>
                  <Td $bold>{r.room}</Td>
                  <Td>{r.students}</Td>
                  <Td>
                    <Badge $done={r.incompleteCount === 0}>
                      {r.incompleteCount === 0 ? "완료" : "미완료"}
                    </Badge>
                  </Td>
                  <Td>{r.incompleteCount}개</Td>
                </Tr>
              ))}
            </tbody>
          </Table>
        </TableWrapper>
      </RoomSection>

      {isPeriodModalOpen && (
        <PeriodModal
          month={month}
          week={week}
          onConfirm={(newMonth, newWeek) => {
            setMonth(newMonth);
            setWeek(newWeek);
            setIsPeriodModalOpen(false);
          }}
          onClose={() => setIsPeriodModalOpen(false)}
        />
      )}
    </>
  );
}

export default RoomGraph;
