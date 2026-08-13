import CheckBox from "../components/CheckBox";
import Navbar from "../components/Navbar"
import StudentCheckBox from "../components/StudentCheckBox";
import TitleBar from "../components/TitleBar"
import { PageBox, ScrollBox, InnerBox } from '../styles/Box.style';
import { SmallTitleText } from "../styles/Text.style"

function HomePage() {
  return (
    <PageBox>
      <ScrollBox>
        <TitleBar title={"412호"} description={"환영합니다."} />
        <StudentCheckBox status={[false, true, false, false, true, false]} alpha={"A"} name={"장성주"} />
        <StudentCheckBox status={[false, true, false, true, false, true]} alpha={"B"} name={"장성주"} />
      </ScrollBox> 
      <Navbar selected={"home"} />
    </PageBox>
  )
}

export default HomePage
