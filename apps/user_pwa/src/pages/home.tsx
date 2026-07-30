import Navbar from "../components/Navbar"
import { FullCenterdBox } from "../styles/Box.style"

function HomePage() {
  return (
    <>
      <FullCenterdBox>
        <Navbar selected={"home"} />
      </FullCenterdBox>
    </>
  )
}

export default HomePage
