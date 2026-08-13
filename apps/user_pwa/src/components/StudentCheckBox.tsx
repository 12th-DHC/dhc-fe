import { InnerBox } from "../styles/Box.style";
import { SmallTitleText } from "../styles/Text.style";
import CheckBox from "./CheckBox";

interface StudentCheckBoxProps {
  status: [boolean, boolean, boolean, boolean, boolean, boolean]; // 정확히 6개!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  alpha: string;
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
  alpha,
  name
}: StudentCheckBoxProps) {
  return (
    <InnerBox style={InnerBoxStyle}>
        <SmallTitleText>{alpha} 학생 담당 · {name}</SmallTitleText>
        {Array.from({ length: 6 }, (_, index) => (
            <CheckBox status={status[index]} text={texts[index]} />
        ))}
    </InnerBox>
  );
}

export default StudentCheckBox;