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
  const datas = [
    {
      "week": 1,
      "value": 1
    },
    {
      "week": 2,
      "value": 2
    },
    {
      "week": 3,
      "value": 3
    },
    {
      "week": 4,
      "value": 4
    },
  ];

  return (
    <FullCenterdBox>
      <TitleBar title={"주차별 통계"} description={"주차별 미완료 개수를 확인하세요."} />
      <AutoCenterdBox style={CheckBoxesBoxStyle}>
          {datas.map((data) => (
            <CheckBar
              key={data.week}
              width="80%"
              title={`${data.week}주차`}
              value={data.value}
            />
          ))}
      </AutoCenterdBox>
      <Navbar selected={"statistics"} />
    </FullCenterdBox>
  )
}

export default StatisticsPage
