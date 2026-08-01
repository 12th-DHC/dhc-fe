import styled from "@emotion/styled";

interface CheckBarProps {
  title: string;
  width: string;
  value: number;
}

const CheckBox = styled.div<{ 
    $width: string,
    $backgroundColor: string,
    $borderColor: string
  }>`
  width: ${({ $width }) => $width};
  height: auto;

  border-radius: 15px;
  background-color: ${({ $backgroundColor }) => $backgroundColor};

  border: 1px solid ${({ $borderColor }) => $borderColor};

  box-sizing: border-box;
  padding: 10px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  gap: 4%;
`;

const CheckLeftText = styled.p`
  font-size: 90%;
  margin: 0 0 0 auto;
  margin-right: 5%;
`

const CheckRightText = styled.p`
  font-size: 90%;
  margin: 0;
  margin-left: 5%;

  font-weight: 600;
`

function CheckBar({
  title,
  width,
  value,
}: CheckBarProps) {
  return (
    <CheckBox 
      $width={width} 
      $backgroundColor={value<3 ? "#f6f4fa" : "#fff5f5"}
      $borderColor={value<3 ? "#b6b6b6" : "#feb2b2"}
    >
      <CheckRightText>{title}</CheckRightText>
      <CheckLeftText>{value}개 미완료</CheckLeftText>
    </CheckBox>
  );
}

export default CheckBar;