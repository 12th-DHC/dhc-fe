import type { RoomEmailCardProps } from "../types/RoomEmailCard.types";
import { getEmailStatus, emailStatusLabel } from "../utils/emailStatus";
import {
  CardWrapper,
  RoomHeader,
  RoomNumber,
  StatusBadge,
  StudentRow,
  StudentLabel,
  StudentName,
  StudentEmail,
} from "../styles/RoomEmailCard.style";

function RoomEmailCard({ data }: RoomEmailCardProps) {
  const status = getEmailStatus(data);

  return (
    <CardWrapper>
      <RoomHeader>
        <RoomNumber>{data.room}</RoomNumber>
        <StatusBadge $status={status}>{emailStatusLabel[status]}</StatusBadge>
      </RoomHeader>

      <StudentRow>
        <StudentLabel>A학생</StudentLabel>
        <StudentName>{data.studentA.name}</StudentName>
        <StudentEmail>{data.studentA.email ?? "-"}</StudentEmail>
      </StudentRow>

      <StudentRow>
        <StudentLabel>B학생</StudentLabel>
        <StudentName>{data.studentB.name}</StudentName>
        <StudentEmail>{data.studentB.email ?? "-"}</StudentEmail>
      </StudentRow>
    </CardWrapper>
  );
}

export default RoomEmailCard;
