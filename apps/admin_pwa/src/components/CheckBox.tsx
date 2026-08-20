import styled from "@emotion/styled";
import type { CSSProperties } from "react";
import { IoCheckbox } from "react-icons/io5";
import { RiCheckboxBlankLine } from "react-icons/ri";

interface CheckBoxProps {
  status: boolean;
  text: string;
  idx: number;
  room: number;
  alpha: string;
  changeCheck: (room: number, idx: number, alpha: string, status: boolean) => void;
}

const GrayOutBox = styled.div`
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

    p {
        font-size: 14px;
        margin: 0;
    }
`;

const Icon = styled.div<{ 
  $color: CSSProperties["color"],
}>`
  svg {
    font-size: 26px;
    color: ${({ $color }) => $color};
    margin: 0;
  }
`

const IconBox = styled.div`
  display: flex;
  flex-direction: row;

  gap: 2%;
`

function CheckBox({
  status,
  text,
  idx,
  room,
  alpha,
  changeCheck
}: CheckBoxProps) {
  const color = status ? "#f84f4f" : "#efedf5";
  const icon = status ? <IoCheckbox /> : <RiCheckboxBlankLine />;

  const clickIconHandler = () => {
    changeCheck(room, idx, alpha, !status);
  };
  return (
     <GrayOutBox
       role="checkbox"
       aria-checked={status}
       tabIndex={0}
       onClick={clickIconHandler}
       onKeyDown={(e) => {
         if (e.key === "Enter" || e.key === " ") {
           e.preventDefault();
           clickIconHandler();
         }
       }}
     >
       <IconBox>
         <Icon $color={color}>{icon}</Icon>
       </IconBox>
       <p>{text}</p>
     </GrayOutBox>
  );
}

export default CheckBox;