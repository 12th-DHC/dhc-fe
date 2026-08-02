import Navbar from "../components/Navbar"
import { FullCenteredBox } from "../styles/Box.style"

function HomePage() {
  return (
    <FullCenteredBox>
      <Navbar selected={"home"} />
    </FullCenteredBox>
  )
}

export default HomePage
