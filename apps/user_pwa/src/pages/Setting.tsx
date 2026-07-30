import Navbar from "../components/Navbar"
import { FullCenterdBox } from "../styles/Box.style"

function SettingPage() {
  return (
    <>
      <FullCenterdBox>
        <Navbar selected={"setting"} />
      </FullCenterdBox>
    </>
  )
}

export default SettingPage
