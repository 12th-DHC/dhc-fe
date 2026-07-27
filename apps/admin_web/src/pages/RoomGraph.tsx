import styled from "styled-components";
import { GlobalStyle } from "../GlobaStyle";

export function RoomGraph() {
  return (
    <>
      <GlobalStyle />
      <Title>전체 호실 통계</Title>
      <P>이번주 청소 체크 현황</P>
    </>
  );
}

export default RoomGraph;

const Title = styled.h1`
  font-size: 30px;
  font-weight: 700;
  text-align: left;
`;

const P = styled.p`
  font-size: 20px;
  text-align: left;
`;
