import { useQuery } from "@tanstack/react-query";
import Navbar from "../components/Navbar"
import StudentCheckBox from "../components/StudentCheckBox";
import TitleBar from "../components/TitleBar"
import { PageBox, ScrollBox } from '../styles/Box.style';
import { getTodayResult, getUserInfo } from "../apis/mainPage";

function stringListToBooleanList(str: string): [boolean, boolean, boolean, boolean, boolean, boolean] {
  const arr: [boolean, boolean, boolean, boolean, boolean, boolean] = [true, true, true, true, true, true];
  const c = str.split("/");
  for (const i of c) {
    arr[Number(i)-1] = false;
  }
  return arr;
}

function HomePage() {
  const { isLoading: isUserInfoLoading, data: userInfoData } = useQuery({
    queryKey: ['userInfo'],
    queryFn: getUserInfo,
  });

  const { isLoading: isTodayResultLoading, data: todayResultData } = useQuery({
    queryKey: [],
    queryFn: getTodayResult,
  });

  if (!isTodayResultLoading) {
    console.log(todayResultData);
  }
  
  return (
    <PageBox>
      <ScrollBox>
        { !isUserInfoLoading && !isTodayResultLoading &&
          <>
            <TitleBar title={`${userInfoData.data.roomNumber}호`} description={"환영합니다."} />
            <StudentCheckBox status={stringListToBooleanList(todayResultData.aNotpassReason)} alpha={"A"} name={userInfoData.data.aEmail.split("@")[0]} />
            <StudentCheckBox status={stringListToBooleanList(todayResultData.bNotpassReason)} alpha={"B"} name={userInfoData.data.bEmail.split("@")[0]} />
          </>
        }
      </ScrollBox>
      <Navbar selected={"home"} />
    </PageBox>
  )
}

export default HomePage
