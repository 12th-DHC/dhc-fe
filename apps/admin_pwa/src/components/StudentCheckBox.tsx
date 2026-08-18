import { InnerBox } from "../styles/Box.style";
import { SmallTitleText } from "../styles/Text.style";
import CheckBox from "./CheckBox";

interface StudentCheckBoxProps {
  status: [boolean, boolean, boolean, boolean, boolean, boolean];
  room: number;
  alpha: string;
  changeCheck: (room: number, idx: number, alpha: string, status: boolean) => void;
  name: string;
}

const texts = [
    "하치와레 인형 사기",
    "먼작귀 애니 보기",
    "집가기",
    "학교 · 기숙사 제거",
    "바닥 물걸레질",
    "옷장 정리정돈"
];

const InnerBoxStyle = {
    marginBottom: "6%",
}

function StudentCheckBox({
  status,
  room,
  alpha,
  changeCheck,
  name
}: StudentCheckBoxProps) {
  return (
    <InnerBox style={InnerBoxStyle}>
        <SmallTitleText>{alpha} 학생 담당 · {name}</SmallTitleText>
        {texts.map((text, index) => (
            <CheckBox
              key={text}
              status={status[index]}
              text={text} 
              idx={index} 
              room={room} 
              alpha={alpha} 
              changeCheck={changeCheck} 
            />
        ))}
    </InnerBox>
  );
}

export default StudentCheckBox;