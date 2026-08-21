import { Title, Desc } from "./styles/PageHeader.style";
import { roomEmails } from "../data/RoomEmail";
import RoomEmailCard from "../components/RoomEmailCard";
import {
  Head,
  Text,
  Alarm,
  CardInfo,
  CardTitle,
  CardDesc,
  SendButton,
  EmailRegister,
} from "./styles/EmailManage.style";
import { SectionTitle } from "./styles/SectionTable.style";

function EmailManage() {
  return (
    <>
      <Head>
        <Text>
          <Title>이메일 관리</Title>
          <Desc>
            청소 현황 알림 발송 및 등록된 이메일 관리 (호실당 A·B 학생 이메일이
            서로 일치해야 등록완료)
          </Desc>
        </Text>
      </Head>

      <Alarm>
        <CardInfo>
          <CardTitle>청소 미완료 알림 전송</CardTitle>
          <CardDesc>미체크 호실 담당 학생에게 이메일 알림을 보냅니다</CardDesc>
        </CardInfo>
        <SendButton>알림 전송</SendButton>
      </Alarm>

      <EmailRegister>
        <SectionTitle>호실별 등록 이메일</SectionTitle>
        {roomEmails.map((r) => (
          <RoomEmailCard key={r.room} data={r} />
        ))}
      </EmailRegister>
    </>
  );
}

export default EmailManage;
