import Navbar from "../components/Navbar"
import { AutoCenterdBox, FullCenterdBox } from "../styles/Box.style"
import CheckBar from '../components/CheckBar';
import TitleBar from "../components/TitleBar";

const CheckBoxesBoxStyle = {
  gap: "3%",
  flex: 1,
  justifyContent: "flex-start",
};

function StatisticsPage() {
  return (
    <>
      <FullCenterdBox>
        <TitleBar title={"주차별 통계"} description={"주차별 미완료 개수를 확인하세요."} />
        <AutoCenterdBox style={CheckBoxesBoxStyle}>
            <CheckBar 
                width="80%"
                title="1주차"
                value={1}
            />
            <CheckBar 
                width="80%"
                title="2주차"
                value={2}
            />
            <CheckBar 
                width="80%"
                title="3주차"
                value={3}
            />
            <CheckBar 
                width="80%"
                title="4주차"
                value={4}
            />
        </AutoCenterdBox>
        <Navbar selected={"statistics"} />
      </FullCenterdBox>
    </>
  )
}

export default StatisticsPage
