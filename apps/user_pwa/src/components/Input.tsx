import type { ReactElement } from "react";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import styled from "@emotion/styled";

interface InputProps {
  title: string;
  placeholder: string;
  icon: ReactElement;
  width: string;
  isSecret: boolean;
  type?: string;

  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const InputBox = styled.div<{ width: string }>`
  width: ${({ width }) => width};
  height: auto;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const LabelText = styled.p`
  font-size: 15px;
  font-weight: bold;

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
  placeholder,
  icon,
  width,
  isSecret,
  type,
  value,
  setValue,
}: InputProps) {
  const [isShown, setIsShown] = useState(false);

  function showPassword() {
    setIsShown((prev) => !prev);  
  }

  return (
    <InputBox width={width}>
      <LabelText>{title}</LabelText>

      <InputInnerBox>
        {icon}

        <input
          placeholder={placeholder}
          type={isSecret && !isShown ? "password" : type}
          value={value}
          onChange={(e) => setValue(e.target.value)}
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