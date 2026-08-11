import Navbar from "../components/Navbar"
import { PageBox, ScrollBox } from "../styles/Box.style"

function HomePage() {
  return (
    <PageBox>
      <ScrollBox>
        home
      </ScrollBox>
      <Navbar selected={"home"} />
    </PageBox>
  )
}

export default HomePage
