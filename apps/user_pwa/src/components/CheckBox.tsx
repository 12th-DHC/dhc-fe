import styled from "@emotion/styled";
import type { CSSProperties } from "react";
import { IoCheckbox } from "react-icons/io5";
import { RiCheckboxBlankLine } from "react-icons/ri";

interface CheckBoxProps {
  status: boolean;
  text: string;
}

const GrayOutBox = styled.div<{ 
  $color: CSSProperties["color"],
}>`
    width: 100%;
    height: auto;

    box-sizing: border-box;
    padding: 3% 5% 3% 5%;
    background-color: #f7f6fb;
    border: solid 2px #f1eff6;
    border-radius: 15px;

    display: flex;
    flex-direction: row;

    align-items: center;

    margin-bottom: 3%;
    gap: 4%;

    svg {
        font-size: 26px;
        color: ${({ $color }) => $color};
        margin: 0;
    }

    p {
        font-size: 14px;
        margin: 0;
    }
`;

function CheckBox({
  status,
  text
}: CheckBoxProps) {
  const color = status ? "#954ff8" : "#efedf5";
  const icon = status ? <IoCheckbox /> : <RiCheckboxBlankLine />;
  return (
    <GrayOutBox $color={color} role="checkbox" aria-checked={status} aria-readonly="true">
        {icon}
        <p>{text}</p>
    </GrayOutBox>
  );
}

export default CheckBox;