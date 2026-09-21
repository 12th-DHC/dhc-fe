import { InnerBox } from "../styles/Box.style";
import { SmallTitleText } from "../styles/Text.style";
import CheckBox from "./CheckBox";

interface StudentCheckBoxProps {
  status: [boolean, boolean, boolean, boolean, boolean, boolean];
  alpha: string;
  name: string;
}

const texts = [
    "침구정리",
    "개인물품 및 의복정리",
    "호실 내 소등하기",
    "전기콘센트 뽑기",
    "바닥정리, 신발정리",
    "개인청소구역 청소"
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
        {texts.map((text, index) => (
            <CheckBox
                key={text}
                status={status[index]}
                text={text}
            />
        ))}
    </InnerBox>
  );
}

export default StudentCheckBox;