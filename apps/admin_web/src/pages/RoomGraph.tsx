import { GlobalStyle } from "../global/GlobalStyle";

import { Title, P } from "./RoomGraph.style";

function RoomGraph() {
  return (
    <>
      <GlobalStyle />
      <Title>전체 호실 통계</Title>
      <P>이번주 청소 체크 현황</P>
    </>
  );
}

export default RoomGraph;
