import type { CSSProperties, ReactElement } from "react";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import styled from "@emotion/styled";

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> { // 부모에서 onChange를 제한다는 문법
  title: string;
  placeholder: string;
  icon: ReactElement;
  width: string;
  isSecret: boolean;
  titleColor?: CSSProperties["color"];
  titleSize?: CSSProperties["fontSize"];
  marginBottom?: CSSProperties["marginBottom"];

  value: string;
  onChange: (value: string) => void;
}

const InputBox = styled.div<{ 
  width: string,
  $marginBottom?: CSSProperties["marginBottom"],
}>`
  width: ${({ width }) => width};
  height: auto;

  display: flex;
  flex-direction: column;
  gap: 10px;

  margin-bottom: ${({ $marginBottom }) => $marginBottom ? $marginBottom : 0};
`;

const LabelText = styled.label<{ 
  $color?: CSSProperties["color"],
  $titleSize?: CSSProperties["fontSize"],
}>`
  font-size: ${({ $titleSize }) => $titleSize ? $titleSize : "15px"};
  font-weight: bold;

  color: ${({ $color }) => $color ? $color : "black"};

  margin: 0;
`;

const InputInnerBox = styled.div`
  width: 100%;
  border-radius: 15px;
  background-color: #f6f4fa;

  border: 1px solid #b6b6b6;

  box-sizing: border-box;
  padding: 10px;

  display: flex;
  flex-direction: row;
  align-items: center;

  gap: 4%;

  svg {
    font-size: 120%;
    margin-left: 3%;
  }

  input {
    width: 70%;

    background: transparent;
    border: none;
    outline: none;
  }
`;

const PasswordShowBtn = styled.button`
  all: unset;
  cursor: pointer;

  margin-left: auto;
  margin-right: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`;

function Input({
  title,
  titleColor,
  titleSize,
  placeholder,
  icon,
  width,
  isSecret,
  value,
  onChange,
  marginBottom,
  ...rest
}: InputProps) {
  const [isShown, setIsShown] = useState(false);

  function showPassword() {
    setIsShown((prev) => !prev);  
  }

  return (
    <InputBox width={width} $marginBottom={marginBottom}>
      <LabelText $color={titleColor} $titleSize={titleSize}>{title}</LabelText>

      <InputInnerBox>
        {icon}

        <input
          {...rest}
          placeholder={placeholder}
          type={isSecret && !isShown ? "password" : rest.type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />

        {isSecret && (
          <PasswordShowBtn onClick={showPassword}>
            {isShown ? <FiEyeOff /> : <FiEye />}
          </PasswordShowBtn>
        )}
      </InputInnerBox>
    </InputBox>
  );
}

export default Input;