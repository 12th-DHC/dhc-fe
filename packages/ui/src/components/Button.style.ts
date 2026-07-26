import styled from "@emotion/styled";
import { mainColor } from "../theme/colors";
import type { CSSProperties } from "react";

interface ButtonStyleProps {
  $width?: CSSProperties["width"];
  $padding?: CSSProperties["padding"];
  $gap?: CSSProperties["gap"];
  $fontSize?: CSSProperties["fontSize"];
}

const Button = styled.button<ButtonStyleProps>`
    width: ${({ $width }) => $width ?? "100%"};
    padding: ${({ $padding }) => $padding ?? "12px 0"};
    font-size: ${({ $fontSize }) => $fontSize ?? "16px"};

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${mainColor};
    color: #ffffff;

    border: none;
    border-radius: 8px;
    cursor: pointer;

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;

export default Button;
