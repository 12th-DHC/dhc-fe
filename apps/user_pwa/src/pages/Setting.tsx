import Navbar from "../components/Navbar"
import TitleBar from "../components/TitleBar"
import { FullCenteredBox } from "../styles/Box.style"

function SettingPage() {
  return (
    <FullCenteredBox>
      <TitleBar title={"설정"} description={"이메일, 호실 비밀번호를 설정하세요."} />
      <Navbar selected={"setting"} />
    </FullCenteredBox>
  )
}

export default SettingPage
