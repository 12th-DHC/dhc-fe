import styled from "@emotion/styled";
import { mainColor } from "../theme/colors";

interface ButtonProps {
    width?: string;
    padding?: string;
    gap?: string;
    fontSize?: string;
}

const Button = styled.button<ButtonProps>`
    width: ${({ width }) => width ?? "100%"};
    padding: ${({ padding }) => padding ?? "12px 0"};
    font-size: ${({ fontSize }) => fontSize ?? "16px"};

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
