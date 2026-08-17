import styled from "@emotion/styled";

export const FullCenteredBox = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    flex-direction: column;
`;

export const AutoCenterdBox = styled.div`
    width: 100%;
    height: auto;

    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: column;
`;

export const GrayInnerBox = styled.div`
    width: 80%;
    height: auto;

    box-sizing: border-box;
    padding: 5% 5% 5% 5%;
    background-color: #f7f6fb;
    border: solid 2px #f1eff6;
    border-radius: 15px;

    display: flex;
    flex-direction: column;
`;

export const InnerBox = styled.div`
    width: 80%;
    height: auto;

    box-sizing: border-box;

    display: flex;
    flex-direction: column;
`;

export const PageBox = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;

    overflow: hidden;
`;

export const ScrollBox = styled.div`
    flex: 1;
    min-height: 0;
    width: 100%;

    overflow-y: auto;
    overscroll-behavior: contain;

    display: flex;
    flex-direction: column;
    align-items: center;

    box-sizing: border-box;
`;